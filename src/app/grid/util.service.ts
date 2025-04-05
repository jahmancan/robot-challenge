export class UtilService {
   static tryParse(input: any): number | null {
      if (!input) {
         return null;
      }
      return parseInt(input);
   }
}
