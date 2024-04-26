export interface Item {
   id: string;
   item: string;
   checkStatus: boolean;
}
export default class ListItem implements Item {

   constructor(
      private _id: string = "",
      private _item: string = "",
      private _checkStatus: boolean = false
   ) {}

   get id(): string {
      return this._id;
   }

   set id(id: string) {
      this._id = id;
   }

   get item(): string {
      return this._item;
   }

   set item(item: string) {
      this._item = item;
   }

   get checkStatus(): boolean {
      return this._checkStatus;
   }

   set checkStatus(checkStatus: boolean) {
      this._checkStatus = checkStatus;
   }
}