import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {

  // "input" is what the user types into the form
  public transform(input: string): string {

          // My version (does not take into account the first word):
//         let prepositions = ['a','an','and','at','but','by','for','in','nor','of','on','or','so','the','to','up','yet'];
//
//         if (!input) {
//             return '';
//         } else {
//             return input.replace(/\w\S*/g, (txt => {
//               if (prepositions.indexOf(txt) > -1) {
//                 return txt.toLowerCase();
//               } else {
//                 return txt[0].toUpperCase() + txt.substr(1).toLowerCase();
//               }
//             } ));
//         }
//     }
// }


/*
// professor version-compressed/complex:

        let prepositions = ['a','an','and','at','but','by','for','in','nor','of','on','or','so','the','to','up','yet'];

        let words = input.split(' ');

        for (let i = 0; i < words.length; i++) {
          //  to ignore the first word, make i > 0
          if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
            words[i] = words[i].toLowerCase();
          } else {
            words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
          }
        }
        return words.join(' ');
    }
}
*/

// Professor version-cleaner, long repetitive code is broken out into functions/methods:

    let words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
          //  to ignore the first word, only apply when i > 0
          if (i > 0 && this.isPreposition(words[i])) {
            words[i] = words[i].toLowerCase();
          } else {
            words[i] = this.toTitleCase(words[i]);
          }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    // ^ takes a word which is a string, and also returns a string ^
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['a','an','and','at','but','by','for','in','nor','of','on','or','so','the','to','up','yet'];
    return prepositions.includes(word.toLowerCase());
  }

}
