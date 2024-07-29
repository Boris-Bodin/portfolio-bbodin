'use client';
import React from 'react';
import {Container, Grid} from '@mui/material';
import {Email} from '@mui/icons-material';
import BBDevPageHeader from '../../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../../design-system/components/card/BBDevCard';

export default function ContactPage() {
    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <BBDevPageHeader
                title={'Contact Me'}
                subTitle={[
                    "I'd love to hear from you! Whether you have a question about my work, want to collaborate, or just want to say hello, feel free to reach out.",
                ]}></BBDevPageHeader>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <BBDevCard
                        title={'Email'}
                        description={'boris.bodin@aegis-techno.com'}
                        icon={<Email fontSize='large' />}></BBDevCard>
                </Grid>
                {/*<Grid item xs={12} md={6}>*/}
                {/*    <Paper elevation={3} className={styles['contactCard']}>*/}
                {/*        <Box className={styles['contactInfo']}>*/}
                {/*            <Phone fontSize="large" />*/}
                {/*            <Typography variant="h6" component="h3" className={styles['contactTitle']}>*/}
                {/*                Phone*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" className={styles['contactDescription']}>*/}
                {/*                +123 456 7890*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} md={6}>*/}
                {/*    <Paper elevation={3} className={styles['contactCard']}>*/}
                {/*        <Box className={styles['contactInfo']}>*/}
                {/*            <LocationOn fontSize="large" />*/}
                {/*            <Typography variant="h6" component="h3" className={styles['contactTitle']}>*/}
                {/*                Location*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" className={styles['contactDescription']}>*/}
                {/*                City, Country*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} md={6}>*/}
                {/*    <Paper elevation={3} className={styles['contactCard']}>*/}
                {/*        <Box component="form" className={styles['contactForm']}>*/}
                {/*            <TextField*/}
                {/*                label="Name"*/}
                {/*                variant="outlined"*/}
                {/*                fullWidth*/}
                {/*                margin="normal"*/}
                {/*                required*/}
                {/*            />*/}
                {/*            <TextField*/}
                {/*                label="Email"*/}
                {/*                variant="outlined"*/}
                {/*                fullWidth*/}
                {/*                margin="normal"*/}
                {/*                required*/}
                {/*            />*/}
                {/*            <TextField*/}
                {/*                label="Message"*/}
                {/*                variant="outlined"*/}
                {/*                fullWidth*/}
                {/*                margin="normal"*/}
                {/*                multiline*/}
                {/*                rows={4}*/}
                {/*                required*/}
                {/*            />*/}
                {/*            <Button*/}
                {/*                variant="contained"*/}
                {/*                color="primary"*/}
                {/*                type="submit"*/}
                {/*                className={styles['submitButton']}*/}
                {/*            >*/}
                {/*                Send Message*/}
                {/*            </Button>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
            </Grid>
        </Container>
    );
}
