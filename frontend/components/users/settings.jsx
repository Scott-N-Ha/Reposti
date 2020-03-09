import React from 'react';

export default class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({
      profile_image_url: "",
      profile_image: null,
    }, this.props.user);

    this.handleChange = this.handleChange.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleImage(e){
    const file = e.currentTarget.files[0];

    const imageReader = new FileReader();
    let that = this;

    imageReader.onloadend= () => {
      that.setState({profile_image_url: imageReader.result});
    }

    if (file){
      this.setState({profile_image: file});
      imageReader.readAsDataURL(file);
    }
  }

  cancelEdit(){
    this.setState(Object.assign({
      profile_image_url: "",
      profile_image: null,
    }, this.props.user));
  }

  handleSubmit(e){
    e.preventDefault();

    const { username, password, profile_image } = this.state.user;
    const { updateSingleUser, updateSingleUserWithImage } = this.props;

    if (profile_image !== null){
      let formData = new FormData();
      formData.append('user[username]', username);
      formData.append('user[password]', password);
      formData.append('user[profile_image]', profile_image);

      updateSingleUserWithImage(formData)
        .then(() => this.cancelEdit());
    } else {
      let newState = {
        username: username,
        password: password,
      }

      updateSingleUser(newState)
        .then(() => this.cancelEdit());
    }
  }

  render(){
    const { username, password, profile_image, profile_image_url } = this.props.user;

    debugger

    if (user === undefined) return null;

    return (
      <div className="settings-div">
        <img
          className="profile-pic-user-show"
          src={ profile_image_url === "" ? "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png" : profile_image_url }
          alt={username} />
      </div>
    )
  }
}