import React, {PureComponent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { updateNewPostActionCreator,addPostActionCreater } from '../../../redux/profile-reducer';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { required, maxLengthCreator , minLengthCreator } from '../../../utils/validators/validators'
import {Textarea} from '../../../common/FormsControls/FormsControls';
import AddMyPostForm from './AddMyPostForm';

const maxLength10 = maxLengthCreator(10);
const minLength5 = minLengthCreator(5);

window.props = [];
const  MyPosts = React.memo( props => {
/*  componentDidMount() {
    setTimeout(() => {
      this.setState({a: 12});
    }, 3000)
  }
  /*shoulComponentUpdate(nextProps, nextState){
    return nextProps != this.props && nextState != this.state;
  }
  render() {*/
    console.log("RENDER YO");
    window.props.push(props);

    console.log(props);

     let posts = props.profilePage.posts
     .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);
      //let newPost = React.createRef();
      let onPostChange = (values) => {
        this.props.onPostChange(values.newPost);
      }
      /*let addPost = () => {
        props.addPost();
      }let onPostChange = () => {
        let text = newPost.current.value;
        props.onPostChange(text);//props.changeNewPostText(text);
      }*/
      return (
        <div  className={classes.postsBlock}>
          <h3>My Posts</h3>
          <div >
            < AddMyPostForm onSubmit={onPostChange}/>
          </div>
            { posts }
        </div>
      );
  //}
});

export default MyPosts;
/*const AddMyPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPost"  placeholder={"Post message"}
               component={ Textarea }
               validate={[required, maxLength10 ,minLength5 ]}/>
      </div>
      <div>
         <button >Add post</button>
       </div>
   </form >
 )
}*/

/*const AddMyPostFormRedux = reduxForm({form: "ProfileAddMyPostFrom"//name of form in redux
})(AddMyPostForm);*/
//without it Error: Field must be inside a component decorated with reduxForm()
//onChange={ onPostChange }
