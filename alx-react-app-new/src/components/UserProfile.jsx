function UserProfile () {
    return (
        <div style={{border: '2px solid grey', padding: '10px', margin: '10px'}}>
          <h2 style={{color: 'black'}}>{props.name}</h2>
          <p>Age:<span style= {{fontWeight:'bold',fontFamily:'sans-serif'}}> {props.age}</span></p>
          <p>Bio: {props.bio}</p>
        </div>
      );
    };
export default UserProfile;