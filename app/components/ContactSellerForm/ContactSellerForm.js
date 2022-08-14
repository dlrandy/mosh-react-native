import { AppForm, AppFormField, SubmitButton } from "../Forms";
import * as Yup from "yup";
const { Keyboard, Alert } = require("react-native");
const { default: messagesApi } = require("../../api/messages");
const { showNotification } = require("../../utility/showNotification");

function ContactSellerForm({listing}) {
    const handleSubmit = async ({message}, {resetForm}) =>{
        Keyboard.dismiss();
        const result = await messagesApi.send(message, listing.id);
        if (!result.ok) {
            console.log("Error contecking seller ", result);
            return Alert.alert('Error', 'Could not send the message to seller.');
        }
        resetForm();
        showNotification({
            content: {
              title: "Awesome",
              body: " Your message was sent to the seller.",
            },
            trigger: {
              seconds: 3,
            },
          })
    }

    return (
        <AppForm
          initialValues={{ message: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            maxLength={255}
            multiline
            name="message"
            numberOfLines={3}
            placeholder="Message..."
          />
          <SubmitButton  title="Contact Seller" />
        </AppForm>)
}
const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
  });
export default ContactSellerForm;