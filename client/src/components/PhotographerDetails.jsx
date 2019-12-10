// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Avatar from 'react-avatar';
// import Photographers from './Photographers';

// class PhotographerDetails extends React.Component {
//   state = {
//     photographer: []
//   }

//   grabPhotographerId = () => {
//     axios.get('/home/photographers/:id')
//       .then(response => {
//         this.setState({
//           photographer: response.data
//         })
//       })
//   }

//   componentDidMount = () => {
//     this.grabPhotographerId()
//   }

//   render() {
//     return (
//       <div class="card horizontal">
//         <div class="card-image">
//           <Avatar name={photographer.name} size="75" round={true} />
//         </div>
//         <div class="card-stacked">
//           <div class="card-content">
//             <span class="card-title grey-text text-darken-4">{photographer.name}</span>
//             <p>{photographer.categories}</p>
//             <p className="tutor-bio">{photographer.bio}</p>
//           </div>
//           {/* <div class="card-action">
//             <Link to="/dashboard/message" className="waves-effect waves-light btn" name={tutor.name} id={tutor._id} onClick={this.props.handleTutorOnClick}><i className="material-icons left"></i>Message</Link>
//           </div> */}
//         </div>
//       </div>
//     )
//   }
// }

// export default PhotographerDetails;