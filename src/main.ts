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
      if(! newEntryText.length) return

      const itemiId:number = fulllist.list.length
      ? parseInt(fulllist.list[fulllist.list.length - 1].id) + 1
      : 1

      const newItem = new ListItem(itemiId.toString(), newEntryText)
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
