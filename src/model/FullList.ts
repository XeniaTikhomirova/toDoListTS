import ListItem from "./ListItem";

interface List {
   list: ListItem[];
   load(): void;
   save(): void;
   clearList(): void;
   addItem(itemObj: ListItem): void;
   removeItem(id: string): void
}

export default class FullList implements List {

   //Singleton:
   static instance: FullList = new FullList();

   private constructor(private _list: ListItem[] = []) {}

   get list(): ListItem[] {
      return this._list;
   }

   load(): void {
      const storedList: string | null = localStorage.getItem("myList");

      if( typeof storedList !== "string") {return}

      // check the interface in ListItem.ts:
      const parsedList: {_id: string, _item: string, _checkStatus: boolean}[] = JSON.parse(storedList);
      
      parsedList.forEach(itemObj => {
         const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checkStatus);
         FullList.instance.addItem(newListItem);
      })
   }

   save(): void {
      localStorage.setItem("myList", JSON.stringify(this._list));
   };

   clearList(): void {
      this._list = [];
      this.save();
   }

   addItem(itemObj: ListItem): void {
      this._list.push(itemObj);
      this.save();
   }

   removeItem(id: string): void {
      this._list = this._list.filter(item => item.id !== id);
      this.save();
   }







}