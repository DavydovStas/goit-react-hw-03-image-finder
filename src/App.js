import './App.css';
import React from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './components/Loader/Loader';
// import Button from './components/Button/Button';
// import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    searchValue: '',
  };

  formSubmitHandler = data => {
    return this.setState({
      searchValue: data.searchValue,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery searchValue={this.state.searchValue} />
        {/* <ImageGalleryItem />

        <Button />
        <Modal /> */}
      </div>
    );
  }
}

export default App;
