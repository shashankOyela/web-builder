import mongoose from "mongoose";

const WebConfigurationSchema = new mongoose.Schema({
  showHeader: Boolean,
  showLogo: Boolean,
  showSlider: Boolean,
  showFooter: Boolean,
  showBanner: Boolean,
  header: {
    logoUrl: String,
    showLogo: Boolean,
  },
});

export default mongoose.model("WebConfiguration", WebConfigurationSchema);
