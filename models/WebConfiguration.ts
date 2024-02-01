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
  menus: [
    {
      label: String,
      name: String,
      value: String,
      linkValue: String,
      linkName: String,
    },
  ],
  footerLinks: [
    {
      name: String,
      linkName: String,
      label: String,
      link: String,
      value: String,
      linkValue: String,
    },
  ],
  slider: {
    sliderDuration: Number,
    slide1Heading: String,
    slide1Link: String,
    slide1Image: String,
    slide2Heading: String,
    slide2Link: String,
    slide2Image: String,
    slide3Heading: String,
    slide3Link: String,
    slide3Image: String,
    slide4Heading: String,
    slide4Link: String,
    slide4Image: String,
  },
  banner: {
    bannerHeading: String,
    bannerImage: String,
  },
});

const WebConfigurationModel =
  mongoose.models.webConfiguration ||
  mongoose.model("webConfiguration", WebConfigurationSchema);

export default WebConfigurationModel;
