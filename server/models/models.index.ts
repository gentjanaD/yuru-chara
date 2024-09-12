import mongoose, {Schema,Document} from "mongoose";

const db = 'mongodb://localhost:27017/mascots';

mongoose.connect(db, (error) => {
  if(error) console.log(error);
  console.log("connected to db");
})

export interface Mascot extends Document {
    name : string,
    japanese : string,
    mascot : string,
    prefecture : string,
    city : string,
    description : string,
    status : string,
    officialSite : string,
    picture : string,
    favorite : boolean
}

const mascotSchema : Schema = new Schema({
    name : { type: String, required: true},
    japanese : {type : String, required: true},
    mascot : {type:String, required: false},
    city : {type: String, required: false},
    description : {type:String, required: false},
    status: String,
    officalSite: String,
    picture: String,
    favourite: {
    type: Boolean,
    defaultValue: false,
  }
})

export default mongoose.model<Mascot>("mascot", mascotSchema);


