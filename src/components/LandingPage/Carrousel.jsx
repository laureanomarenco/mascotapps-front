import * as React from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 900, height: '90vh', overflowY:'hidden' }}>
      <ImageList variant="masonry" cols={3} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821916/mascotapps/animals-dogs_3CLDGN47PX_uqeek0.jpg',
    title: 'Bed',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821915/mascotapps/StockSnap_EJELGQPXN6_dkux6i.jpg',
    title: 'Books',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662831899/mascotapps/StockSnap_LPZFCLQN45_d2wvmc.jpg',
    title: 'Sink',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662832049/mascotapps/StockSnap_HRVE3RBCEF_mchish.jpg',
    title: 'Sink',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662832128/mascotapps/StockSnap_L8BQFVZHPD_os1sbn.jpg',
    title: 'Sink',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662832655/mascotapps/StockSnap_153HM5NIQD_uar46v.jpg',
    title: 'Sink',
  },
  {
    img: 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821916/mascotapps/animals-dogs_3CLDGN47PX_uqeek0.jpg',
    title: 'Bed',
  }
];