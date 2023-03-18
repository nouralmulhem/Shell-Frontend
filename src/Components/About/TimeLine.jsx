import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StarRateIcon from '@mui/icons-material/StarRate';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Typography } from '@mui/material';

export default function TimeLine() {
  return (
    <Timeline position="alternate" sx={{ width: 935 }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Diversity3Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            First team
          </Typography>
          <Typography>
            in the MENA region
            to participate in the
            competition
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <EmojiEventsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Finished
          </Typography>
          <Typography>
            the competition in the
            4th place
            Won the communication award &
            3,000$
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LooksTwoIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Second team
          </Typography>
          <Typography>
            out Of 178 to pass
            Technical inspection and Achieve
            a valid run and Finished the
            competition in the 8th place
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LooksOneIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            First team
          </Typography>
          <Typography>
            to pass technical
            inspection and achieve a valid run.
            We achieved a record by running
            120 KM with just one Liter.
            We got the highest rank in Egypt:
            Third.

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <DirectionsCarIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            First team
          </Typography>
          <Typography>
            in the MENA region
            to design and build a carbon
            fiber chassis and Electrifying
            our cars

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <StarRateIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Highest Record
          </Typography>
          <Typography>
            in The Middle
            East for Electric Car
            We took 10th place among 34
            teams from Asia, Africa, and
            Australia with a record 249.1
            KM/KWH, this is the highest record
            for an electric vehicle in the Middle
            East.

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <CoronavirusIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Our first year
          </Typography>
          <Typography>
            in Europe region. We
            got an honorable mention in the
            safety award. the competition has
            been canceled because of Covid 19

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <MilitaryTechIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Achieved
          </Typography>
          <Typography>
            1st Place in Stimulate to
            Innovate Award
            2nd Place in
            Communication Awards
            5th Place in Autonomous
            Cars WorldWide
            Competition

          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AutoGraphIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Achived
          </Typography>
          <Typography>
            1st Place in Future Rider
            Competition
            2nd Place in Stimulate to
            Innovate Award
            2nd Place in
            Communication Award

          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
