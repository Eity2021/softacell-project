
import { Box } from '@mui/material';
import EventBanner from './EventBanner';
import EventSearch from './EventSearch';
import { useGetEventQuery } from '../../features/event/eventApi';

export default function EventList() {
    const {data:event, isLoading,isError} = useGetEventQuery();
   
  return (
<Box sx={{ minHeight: "100vh", pt: 2 }}>
   <EventBanner></EventBanner>
   <EventSearch event={event}></EventSearch>
</Box>
  )
}
