import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData.json';
import useWindowDimensions from '../../src/useWindowDimensions';

/**
 * WIP
 * I think this is the way to go with material-ui
 * Will refactor everything else... maybe
 */

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    maxHeight: 640,
  },
});

const getColumns = (width) => {
  if (width <= 480) return 1;
  if (width <= 720) return 2;
  return 3;
};

const getCellHeight = (width) => {
  if (width <= 480) return 450;
  // if (width <= 640) return ;
  return 240;
};

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList(props) {
  const { width } = useWindowDimensions();
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={getCellHeight(width)}
        className={classes.gridList}
        cols={getColumns(width)}
      >
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(TitlebarGridList);
