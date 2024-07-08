export const getSender = (loggedUser, users) => {
  return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

export const isSameSender = (messages, m, i, userId) => {
                                                                        //m = current user, i=curr index
  return (
    i < messages.length - 1 &&                                         //check curr msg isn't last msg
    (messages[i + 1].sender._id !== m.sender._id ||                   //sender of next msg != sender of current msg
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId                                //next msg isn't of same user
  );
};
export const isLastMessage = (messages, i, userId) => {
 
  return (
    i === messages.length - 1 &&                                        //check last msg sent by user
    messages[messages.length - 1].sender._id !== userId &&             //id of last msg arr is not = to curr user id
    messages[messages.length - 1].sender._id                          //and that msg actually exists
  );
};
export const isSameSenderMargin = (messages, m, i, userId) => {
                                                                    //m = current user, i=curr index
if (
i < messages.length - 1 &&                                         //check whether it's same user logged in
messages[i + 1].sender._id === m.sender._id &&                   
messages[i].sender._id !== userId                                
) 
return 33;
else if(
  (i < messages.length - 1 &&                                        
    messages[i + 1].sender._id !== m.sender._id &&                  //sender of next msg != sender of current msg
      messages[i].sender._id !== userId) ||
   ( i === messages.length-1 && messages[i].sender._id !== userId    )
)
return 0;
else return "auto";
};

export const isSameUser = (messages,m,i)=>{
   return i > 0 && messages[i-1].sender._id === m.sender._id;
};