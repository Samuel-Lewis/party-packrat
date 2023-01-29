import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  FirestoreDataConverter,
  getDoc,
  QueryDocumentSnapshot,
  setDoc,
  UpdateData,
  updateDoc,
  WithFieldValue,
} from "firebase/firestore";

export const converter = <
  T extends WithFieldValue<DocumentData>
>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

const nonNull = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

export type ConnectionReturn<T> = {
  ref: DocumentReference;
  snap: QueryDocumentSnapshot<T>;
  data: T;
};

export class FirestoreConnection<T extends WithFieldValue<DocumentData>> {
  protected collectionRef: CollectionReference<T>;
  protected converter = converter<T>();

  constructor(protected fs: Firestore, protected tableKey: string) {
    this.collectionRef = collection(this.fs, this.tableKey).withConverter(
      this.converter
    );
  }

  public create(item: T) {
    return addDoc(this.collectionRef, {
      ...item,
    });
  }

  public async getDoc(key: string) {
    const docRef = doc(this.fs, this.tableKey, key).withConverter(
      this.converter
    );

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ref: docRef, snap: docSnap, data: docSnap.data() };
    }
    return null;
  }

  public async getOrCreateDoc(key: string, defaultValue: T) {
    const docRef = doc(this.fs, this.tableKey, key).withConverter(
      this.converter
    );

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, defaultValue);
    }
    return { ref: docRef, snap: docSnap, data: docSnap.data() };
  }

  public async updateDoc(key: string, item: UpdateData<T>) {
    const docRef = doc(this.fs, this.tableKey, key).withConverter(
      this.converter
    );
    await updateDoc(docRef, item);
  }

  public async hydrateRef(
    ref: DocumentReference
  ): Promise<ConnectionReturn<T> | null> {
    const docSnap = await getDoc(ref.withConverter(this.converter));
    if (docSnap.exists()) {
      return { ref, snap: docSnap, data: docSnap.data() };
    }
    return null;
  }

  public async hydrateRefs(
    refs: DocumentReference[]
  ): Promise<ConnectionReturn<T>[]> {
    const r = refs.map((ref) => this.hydrateRef(ref));
    return (await Promise.all(r)).filter(nonNull);
  }
}