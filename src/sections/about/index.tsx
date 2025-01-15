import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import React from "react";
import { API_URL } from "src/utilities/resources";

const TopAbout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',  // Adjust the height as needed
                backgroundImage: `url(${API_URL}/uploads/about_us_bg_127149fc2b.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                mb: '20px'
            }}
        >   

            <Box sx={{ maxWidth: '1280px', flex: 1, width: '100%', px: '16px'}}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Typography sx={{ fontSize: '16px',}}>
                        About us
                    </Typography>
                    <Divider sx={{ bgcolor: '#0C868D', height: '6px', borderRadius: '4px', width: '160px', mb: '20px' }} />
                    <Typography >
                        Skilling Up Professionals to Enable Growth, Productivity and Efficiency
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

const Body = () => {

    return (
        <Box sx={{ display: 'flex', width: '100%', overflow: 'hidden', bgcolor: '#000', py: '16px'  }}>
                <Box
                    component="img"
                    src={`${API_URL}/uploads/about_us_bg_127149fc2b.jpg`}
                    alt="Learning Environment"
                    sx={{
                        maxWidth: '50%',
                        width: 'auto',
                        height: 'auto',
                        borderTopRightRadius: '16px',
                        borderBottomRightRadius: '16px',
                        display: {
                            xs: 'none',
                            sm: 'block'
                        },
                        mt: '-16px'
                    }}
                />
            <Box
                sx={{
                    padding: 4,
                    flexGrow: 1,// Set the appropriate background color
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: '#fff'
                }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    About us
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    At GreyCampus, we believe that every organisation should be able to skill up
                    their workforce effectively in a professional, effective, and affordable manner.
                    With that in mind, we have set out to create the world’s best-value platform
                    where learners can access high-quality online courses, focused practical
                    sessions from practitioners, and get their questions answered directly by
                    experts.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    After 7 years of successful skilling globally, we launched OdinSchool, our India-
                    focussed brand, in 2021 to focus on upskilling graduates and working
                    professionals in high-demand technologies for the Indian industry.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    We believe the best-value learning experience need not necessarily involve attending a
                    traditional classroom lecture. Instead, pairing up learning content created by
                    top instructors with dedicated, 24×7 Q&A support from subject experts can
                    deliver an equivalent (if not superior) learning experience.
                </Typography>
            </Box>
        </Box>
    )
}

const TeamMember = ({ name, role, imgUrl }: {name: string, role: string, imgUrl: string}) => {
    return (
        <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
                src={imgUrl}
                alt={name}
                sx={{ width: 140, height: 140, mb: 1, bgcolor: '#fff' }}
            />
            <Typography variant="subtitle1" component="div">
                {name}
            </Typography>
            <Typography variant="body2" >
                {role}
            </Typography>
        </Grid>
    );
};

const MeetTheTeam = () => {
    // Replace these URLs with the actual image URLs provided by you
    const teamMembers = [
        { name: 'Deb', role: 'CEO', imgUrl: `${API_URL}/uploads/deb_538686fe03.webp` },
        { name: 'Srinivas', role: 'Product', imgUrl: `${API_URL}/uploads/srini_a92a6e8e4f.webp` },
        { name: 'Shruti', role: 'Enterprise Business', imgUrl: `${API_URL}/uploads/Shruti_5103c4b691.webp` }
    ];

    return (
        <Box sx={{ backgroundColor: '#212529', py: '64px', color: '#fff', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '32px', mb: '40px'}}>Meet The Team</Typography>
            <Grid container justifyContent="center" spacing={2}>
                {teamMembers.map(member => (
                    <TeamMember key={member.name} name={member.name} role={member.role} imgUrl={member.imgUrl} />
                ))}
            </Grid>
        </Box>
    );
};

const About = () => {
    return (
        <Box sx={{ bgcolor: '#000', fontFamily: 'Poppins, sans-serif', }}>
            <TopAbout />
            <Body />
            <MeetTheTeam />
        </Box>
    )
}

export default About;