import mongoose from 'mongoose';

const cardInfoSchema = new mongoose.Schema({
  _cardid: { type: mongoose.Schema.Types.ObjectId },
  index: { type: Number },
}, { _id: false });

const Schema = new mongoose.Schema({
  title: { type: String, required: true },
  card_info: { type: [cardInfoSchema], default: [] },
});

const lane = mongoose.model('lanes', Schema);
export default lane;
