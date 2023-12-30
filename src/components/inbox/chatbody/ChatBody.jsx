// import Blank from "./Blank"; 
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import { useParams } from "react-router-dom";
import Error from "../../ui/Error";

export default function ChatBody() {
  const { id } = useParams();
  const { data: messages, isLoading, isError, error } = useGetMessagesQuery(id);
 
  /* decide what content to render */
  let content = null;
  /* in loading condition */
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  /* in not loading but error condition */
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  /* in not loading and not error but array of object length is 0 */
  if (!isLoading && isError && messages?.length === 0) {
    content = <div>No Message Found!</div>;
  }
  /* in not loading and not error but array of object length is greater than 0 */
  if (!isLoading && !isError && messages?.length > 0) {
    content = (
      <>
        <ChatHead
          message={messages[0]}
        />
        
         
        <Messages messages={messages} />
        <Options />
      </>
    );
  }
 
   

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        {content}
      </div>
    </div>
  );
}
