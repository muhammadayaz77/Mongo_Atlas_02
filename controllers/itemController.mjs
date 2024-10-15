import Item from '../models/itemModel.mjs';


export const getItem = async (req,res) => {
  let data = await Item.find();
  res.json(data);
}

export const postData = async (req,res) => {
  let data = await Item(req.body);
  await data.save()
  res.json(data);
}
export const updateItem = async (req,res) => {
  let updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(updatedItem);
}
export const deleteItem = async (req,res) => {
  let updatedItem = await Item.findByIdAndDelete(req.params.id);
  res.json(updatedItem);
}