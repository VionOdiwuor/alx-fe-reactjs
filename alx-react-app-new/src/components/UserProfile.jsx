function UserProfile () {
  const user = {
    name: "John Doe",
    age: 30,
    bio: "Software Engineer"
  };
    return (
        <div style={{border: '1px solid grey', padding: '10px', margin: '10px'}}>
          <h2 style={{color: 'blue'}}>{props.user.name}</h2>
          <p>Age:<span style= {{fontWeight:'bold',fontFamily:'sans-serif'}}> {props.user.age}</span></p>
          <p>Bio: {props.user.bio}</p>
        </div>
      );
    };
export default UserProfile;