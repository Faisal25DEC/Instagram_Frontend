import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProfileCard from "./profileCard";
import PostGrid from "./postGrid";
import ResponsiveTab from "./responsiveTab";
import NoPost from "./noPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getUserAllDetailAction } from "../../redux/search_user/search_user.action";
import { useSelector } from "react-redux";
import Sidebar from "../../components/navbar/nav";
import { useParams } from "react-router-dom";
type RootState = {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
};
interface RouteParams {
  userId: string;
}

const Profile = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  // const { userId } = useParams<RouteParams>();
  const { userId } = useParams();
  useEffect(() => {
    dispatch(getUserAllDetailAction(userId));
  }, []);

  console.log(userId);
  const searchUserId: any = userId;
  const loginUserId: string = "6541fd88e61629b35627c78f";
  const searchUserFollowing: string[] = ["11", "12", "13"];
  const isSameUser: boolean = searchUserId == loginUserId;

  return (
    <>
      <Flex w="100%">
        <Box>
          <Sidebar />
        </Box>

        <Spacer />
        <Container
          border={"2px"}
          // centerContent
          maxW="90%"
          // w="100%"
          minW="80%"
          marginX='auto'
        >
          <Box w={{ base: "100%", md: "80%", lg: "70%" }} marginX={'auto'} >
            <VStack>
              <ProfileCard isSameUser={isSameUser} />
              <Tabs display={{ base: "none", md: "block" }}>
                <TabList w="max-content" m="auto">
                  <Tab me="2rem">POSTS</Tab>
                  <Tab me="2rem">REELS</Tab>
                  <Tab>TAGS</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {/* <NoPost /> */}
                    {/* <PostGrid /> */}
                  </TabPanel>
                  <TabPanel>{/* <PostGrid /> */}</TabPanel>
                  <TabPanel>{/* <PostGrid /> */}</TabPanel>
                </TabPanels>
              </Tabs>
              <ResponsiveTab />
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Profile;