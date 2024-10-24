import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { _products } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { ProductItem } from '../product-item';
import { CartIcon } from '../product-cart-widget';
import { ProductFilters } from '../product-filters';
import NewProductForm from '../new-product-form';

// ----------------------------------------------------------------------
const dummy = [
  {
    productName: 'Super Widget',
    status: 'prod',
    description1:
      'The Super Widget is a revolutionary product that streamlines your workflow and increases productivity.',
    description2:
      'Designed with user experience in mind, the Super Widget integrates seamlessly with existing systems.',
    technicalInfo:
      'Specifications: \n - Weight: 1.2 kg \n - Dimensions: 15x10x5 cm \n - Compatible with: Windows, Mac, Linux',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
const defaultFilters = {
  price: '',
  gender: ['men'],
  colors: ['#FF4842'],
  rating: 'up4Star',
  category: 'all',
};

export function ProductsView() {
  const [openModal, setOpenModal] = useState(false);

  const handleAddProduct = (newProduct: any) => {
    console.log('New Product Added:', newProduct);
    // Logic to add the new product to the existing products array or state
    setOpenModal(false); // Close the modal after adding
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Products
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => setOpenModal(true)}
        >
          Add product
        </Button>
      </Box>

      <Grid container spacing={3}>
        {dummy.map((product) => (
          <Grid key={product.productName} xs={12} sm={6} md={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            maxWidth: 800,
            margin: 'auto',
            mt: '5%',
            boxShadow: 24,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Add New Product
          </Typography>
          <NewProductForm onAddProduct={handleAddProduct} />
        </Box>
      </Modal>
    </DashboardContent>
  );
}
