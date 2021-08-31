import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ClothingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      /*
        Grabs "props" data, data that was sent from the ClothingCardContainer class

        Refer to: ClothingCardContainer.js
      */
      imgUrl: props.imgUrl,
      name: props.name || '',
      size: props.size || '',
      category: props.category || ''
    }
  }

  render() {
    return (
      <Card style={{ width: 250, margin: 10 }}>
        <CardActionArea>
          <CardMedia style={{ height: 250, width: 250 }} image={this.state.imgUrl} title={this.state.name}/>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {this.state.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ClothingCard;