import React from 'react';
import { Grid } from '@material-ui/core';
import ClothingCard from './ClothingCard';

class ClothingCardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /*
        Hard initialized clothing array
        Future usage: Use a GET request to obtain listing of clothings from a database

        This will store basic data for display usage only and is sent to the render() function
      */
      clothing: [
        {
          imgUrl: 'https://picsum.photos/250',
          name: "Awesome T-Shirt",
          size: 'XL',
          category: 'Category1'
        },
        {
          imgUrl: 'https://picsum.photos/250',
          name: "Poopy Jeans",
          size: 'SM',
          category: 'Category2'
        },
        {
          imgUrl: 'https://picsum.photos/250',
          name: "THICC Sweater",
          size: 'XXXXXXXL',
          category: 'Category3'
        }
      ]
    }
  }

  render() {
    return (
      /*
        Generates a grid and iterates through the clothing array and passes in 
        related data and generates a "ClothingCard" component

        Refer to: https://material-ui.com/components/grid/
      */
      <Grid container style={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {this.state.clothing.map((value) => (
              <Grid key={value} item>
                <ClothingCard
                  name={value.name}
                  imgUrl={value.imgUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ClothingCardContainer;