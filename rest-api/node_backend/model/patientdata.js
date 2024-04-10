//now i have to make schema
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let patientdata=new Schema(
    {
  name:{type:String},
  mobileNo:{type:Number},
  city:{type:String},
  age:{type:Number},
  gender:{type:String},
  appointmentTime:{type:String},
  isFirstVisit:{type:Boolean},
  naration:{type:String},
  appointmentDate:{type:Date}
   },
   {
    collection:'PatientsData'
   }
)
module.exports=mongoose.model('patientdata',patientdata)
// name:"",
// mobileNo:"",
// city:"",
// age: 0,
// gender:"",
// appointmentTime:"",
// isFirstVisit:true,
// naration:"",
// appointmentDate:""

// The first argument 'patientdata' specifies the name of the model.
// The second argument patientdata is the schema object defined earlier.
// By exporting this model, other parts of the application can import it and use it to interact with the MongoDB collection. The model provides methods for performing CRUD (Create, Read, Update, Delete) operations on the collection.