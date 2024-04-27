import './css/style.css';
import FullList from './model/FullList';
import ListItem from './model/ListItem';
import listTamplate from './templates/ListTemplate';

const initApp= ():void => {
   const fulllist = FullList.instance;
   const template = listTamplate.instance;
   
   const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;

   itemEntryForm.addEventListener("submit", (evt: SubmitEvent):void => {
      evt.preventDefault();
      const input = document.getElementById("newItem") as HTMLInputElement;
      const newEntryText: string = input.value.trim();
      if(!newEntryText.length) return

      //To find out next id number:
      const itemId:number = fulllist.list.length
         //it counts the next id number when we already have something inside ("true"):
         ? parseInt(fulllist.list[fulllist.list.length - 1].id) + 1
         // otherwise it would be the first item:
         : 1
      //console.log(itemiId);
      //console.log(parseInt(fulllist.list[fulllist.list.length - 1].id) + 1) i.e. next number;
      //console.log(parseInt(fulllist.list[fulllist.list.length - 1].id)) i.e current number;

      const newItem = new ListItem(itemId.toString(), newEntryText)
      fulllist.addItem(newItem);
      template.render(fulllist);
   })
   const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;

   clearItems.addEventListener("click", (evt):void => {
      evt.preventDefault();
      fulllist.clearList();
      template.clear();
   })
   fulllist.load();
   template.render(fulllist)
}

document.addEventListener("DOMContentLoaded", initApp);
