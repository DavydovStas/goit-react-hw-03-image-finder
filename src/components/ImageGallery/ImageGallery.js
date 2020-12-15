import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

class ImageGallery extends React.Component {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({
        loading: true,
        page: 1,
      });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.searchValue}&page=${this.state.page}&per_page=12&key=19081920-2c3ac78229fa04ecd1a30d4e6`,
        )
          .then(res => res.json())
          .then(images => {
            this.setState({ images: images.hits });
          })
          .finally(() => this.setState({ loading: true }));
      }, 3000);
    }
  }

  getGaleryMurkup = () => {
    return (
      this.state.images &&
      this.state.images.map(image => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.id}
          key={image.id}
        />
      ))
    );
  };

  getButtonMurkup = () => {
    return this.state.images && <Button onClick={this.onLoadMoreButtonClick} />;
  };

  onLoadMoreButtonClick = () => {
    const newPage = this.state.page + 1;
    this.setState(() => ({
      page: newPage,
    }));

    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.searchValue}&page=${newPage}&per_page=12&key=19081920-2c3ac78229fa04ecd1a30d4e6`,
    )
      .then(res => res.json())
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      });
  };

  render() {
    return (
      <div>
        <ul className="ImageGallery">
          {this.state.loading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={2000}
            />
          )}
          {this.getGaleryMurkup()}
        </ul>
        {this.getButtonMurkup()}
      </div>
    );
  }
}

export default ImageGallery;
