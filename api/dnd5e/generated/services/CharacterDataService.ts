/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbilityScore } from "../models/AbilityScore";
import type { Alignment } from "../models/Alignment";
import type { Background } from "../models/Background";
import type { Language } from "../models/Language";
import type { Proficiency } from "../models/Proficiency";
import type { Skill } from "../models/Skill";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CharacterDataService {
  /**
   * Get an ability score by index.
   * # Ability Score
   *
   * Represents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]
   *
   * @returns AbilityScore OK
   * @throws ApiError
   */
  public static getApiAbilityScores({
    index,
  }: {
    /**
     * The `index` of the ability score to get.
     *
     */
    index: "cha" | "con" | "dex" | "int" | "str" | "wis";
  }): CancelablePromise<AbilityScore> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/ability-scores/{index}",
      path: {
        index: index,
      },
    });
  }

  /**
   * Get an alignment by index.
   * # Alignment
   *
   * A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]
   *
   * @returns Alignment OK
   * @throws ApiError
   */
  public static getApiAlignments({
    index,
  }: {
    /**
     * The `index` of the alignment to get.
     *
     */
    index:
      | "chaotic-neutral"
      | "chaotic-evil"
      | "chaotic-good"
      | "lawful-neutral"
      | "lawful-evil"
      | "lawful-good"
      | "neutral"
      | "neutral-evil"
      | "neutral-good";
  }): CancelablePromise<Alignment> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/alignments/{index}",
      path: {
        index: index,
      },
    });
  }

  /**
   * Get a background by index.
   * # Background
   *
   * Every story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world. Choosing a background provides you with important story cues about your character's identity. [[SRD p60](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=60)]
   *
   * _Note:_ acolyte is the only background included in the SRD.
   *
   * @returns Background OK
   * @throws ApiError
   */
  public static getApiBackgrounds({
    index,
  }: {
    /**
     * The `index` of the background to get.
     *
     */
    index: "acolyte";
  }): CancelablePromise<Background> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/backgrounds/{index}",
      path: {
        index: index,
      },
    });
  }

  /**
   * Get a language by index.
   * # Language
   *
   * Your race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]
   *
   * @returns Language OK
   * @throws ApiError
   */
  public static getApiLanguages({
    index,
  }: {
    /**
     * The `index` of the language to get.
     *
     */
    index:
      | "abyssal"
      | "celestial"
      | "common"
      | "deep-speech"
      | "draconic"
      | "dwarvish"
      | "elvish"
      | "giant"
      | "gnomish"
      | "goblin"
      | "halfling"
      | "infernal"
      | "orc"
      | "primordial"
      | "sylvan"
      | "undercommon";
  }): CancelablePromise<Language> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/languages/{index}",
      path: {
        index: index,
      },
    });
  }

  /**
   * Get a proficiency by index.
   * # Proficiency
   *
   * By virtue of race, class, and background a character is proficient at using certain skills, weapons, and equipment. Characters can also gain additional proficiencies at higher levels or by multiclassing. A characters starting proficiencies are determined during character creation.
   *
   * @returns Proficiency OK
   * @throws ApiError
   */
  public static getApiProficiencies({
    index,
  }: {
    /**
     * The `index` of the proficiency to get.
     *
     * Available values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `proficiencies`.
     *
     */
    index: string;
  }): CancelablePromise<Proficiency> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/proficiencies/{index}",
      path: {
        index: index,
      },
    });
  }

  /**
   * Get a skill by index.
   * # Skill
   *
   * Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]
   *
   * @returns Skill OK
   * @throws ApiError
   */
  public static getApiSkills({
    index,
  }: {
    /**
     * The `index` of the skill to get.
     *
     */
    index:
      | "acrobatics"
      | "animal-handling"
      | "arcana"
      | "athletics"
      | "deception"
      | "history"
      | "insight"
      | "intimidation"
      | "investigation"
      | "medicine"
      | "nature"
      | "perception"
      | "performance"
      | "persuasion"
      | "religion"
      | "sleight-of-hand"
      | "stealth"
      | "survival";
  }): CancelablePromise<Skill> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/skills/{index}",
      path: {
        index: index,
      },
    });
  }
}
