# _Pig Latin Translator_

#### _Takes user sentence input and translates it into pig latin, 8/17/16_

#### By _**Caleb Stevenson, Kiet Duong**_

## Description

_This webpage will incorporate HTML, CSS, Javascript, and JQuery to translate a sentence that the user will input into pig latin._

###### Specs:

###### The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. PASSED
* _Example Input: 3_
* _Example Output: 3_

###### The program does nothing to single letter consonants since there are no single letter consonant words. PASSED
* _Example Input: s_
* _Example Output: s_

###### The program returns a single letter vowel. PASSED
* _Example Input: a_
* _Example Output: a_

###### The program adds "ay" to single-letter words beginning with a vowel. PASSED
* _Example Input: i_
* _Example Output: iay_

###### The program recognizes vowels regardless of case and adds "ay" to the single letter word. PASSED
* _Example Input: I_
* _Example Output: Iay_

###### The program adds "ay" to multi letter words beginning with a vowel. PASSED
* _Example Input: at_
* _Example Output: atay_

###### The program translates a word beginning with a single consonant by moving that consonant to the end of the word and adding "ay".
* _Example Input: to_
* _Example Output: otay_

###### The program translates a word beginning with multiple consonants by moving all the first consecutive consonants to the end of the word and adding "ay".
* _Example Input: shift_
* _Example Output: iftshay_

###### The program recognizes "y" as vowel if it does not begin the word.
* _Example Input: synth_
* _Example Output: ynthsay_

###### The program recognizes "y" as consonant if it begins the word.
* _Example Input: synth_
* _Example Output: ynthsay_

###### The program recognizes words starting with "qu" and moves "qu" to the end of the word and adds "ay".
* _Example Input: quell_
* _Example Output: ellquay_

###### The program recognizes words starting with "squ," moves the "squ" to the end of the word and adds "ay" to the end.
* _Example Input: squelch_
* _Example Output: elchsquay_

###### The program recognizes words starting with "Qu" regardless of case, moves "Qu" to the end of the word and adds "ay".
* _Example Input: Quell_
* _Example Output: ellQuay_

###### The program recognizes words starting with "Squ," moves the "Squ" to the end of the word and adds "ay" to the end.
* _Example Input: Squelch_
* _Example Output: elchSquay_

###### The program recognizes when a word that begins with "Qu" is capitalized and returns a lower case version of that word.
* _Example Input: Quell_
* _Example Output: ellquay_

###### The program recognizes when a word that begins with "Squ" is capitalized and returns a lower case version of that word.
* _Example Input: Squelch_
* _Example Output: elchsquay_

###### The program recognizes when a word that begins with "Qu" and returns a properly capitalized version of the word after translating.
* _Example Input: Quell_
* _Example Output: Ellquay_

###### The program recognizes when a word that begins with "Squ" and returns a properly capitalized version of the word after translating.
* _Example Input: Squelch_
* _Example Output: Elchsquay_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Open index.html in the browser of your choosing_

_You must host this webpage locally_

## Known Bugs

_None yet_

## Support and contact details

* _Caleb Stevenson: cgrahamstevenson@gmail.com_
* _Kiet Duong: kd14g@my.fsu.edu_

## Technologies Used

_HTML,
CSS,
JS_

### License

*This webpage is licensed under the GPL license.*

Copyright (c) 2016 **_Caleb Stevenson, Kiet Duong_**
