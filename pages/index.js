import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

function ContentItem(props) {
  return (
    <Box scrollSnapAlign="start" height="100vh" width="100vw">
      <Grid height="100vh" width="100vw">
        <GridItem //
          height="100vh"
          width="100vw"
          backgroundColor="yellow"
        >
          <Image //
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="50% 50%"
            src={props.url}
            alt=""
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      <Box>
        <ContentItem url="/images/francesco-ungaro-1CSpgVmx1cU-unsplash.jpg     " />
        <ContentItem url="/images/luybi-goloshchapova-Oq9yv_8rTuo-unsplash.jpg  " />
        <ContentItem url="/images/marek-piwnicki-xfixPcc5aOE-unsplash.jpg       " />
        <ContentItem url="/images/maria-osta-iJ-P0CWfjfs-unsplash.jpg           " />
        <ContentItem url="/images/mono-log--HvOSe0s7Y8-unsplash.jpg             " />
        <ContentItem url="/images/nooshin-komjani-Ss_gBbYALhM-unsplash.jpg      " />
        <ContentItem url="/images/tom-delanoue-Cf4-4BZdim8-unsplash.jpg         " />
      </Box>

      <style jsx global>{`
        html {
          scroll-snap-type: y mandatory;
          scroll-snap-stop: always;
        }
      `}</style>
    </Box>
  );
}
