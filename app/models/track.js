import mongoose, { Schema } from "mongoose";

const trackSchema = new Schema({
    productType:{
        type: String,
        required: [true, "Product Name is required"],
    },

    shippingQuantity:{
        type: Number,
        required: [true, "Shipping Quantity is required"],
    },

    totalWeight:{
        type: Number,
        required: [true, "Weight is required"],
    },

    description:{
        type: String,
    },

    senderCountry:{
        type: String,
        required: [true, "Pickup Country is required"],
    },
    senderCity:{
        type: String,
        required: [true, "Pickup City is required"],
    },

    contactName:{
        type: String,
        required: [true, "Pickup Contact is required"],
    },

    contactAddress:{
        type: String,
        required: [true, "Pickup Address is required"],
    },

    shippingDate:{
        type: Date,
        default:Date.now,
    },

    deliveryCountry:{
        type: String,
        required: [true, "Country is required"],
    },
    deliveryCity:{
        type: String,
        required: [true, "City is required"],
    },
    deliveryContact:{
        type: String,
        required: [true, "Contact is required"],
    },

    deliveryAddress:{
        type: String,
        required: [true, "Address is required"],
    },
    shipmentID:{
        type:String,
        required:[true]
    },
    pendingPayment:{
        type: String,
        required:[true]
    },
    pendingPaymentDate:{
        type: Date,
        default: Date.now
    }
})

const Track =
  mongoose.models.Track || mongoose.model("Track", trackSchema);

export default Track;