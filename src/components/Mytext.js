// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Text

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Mytext = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#111825',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default Mytext;



// new file for video


// import React, { useState, useRef, useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import Video  from 'react-native-video';

// const { height, width } = Dimensions.get('window');

// const cellHeight = height;
// const cellWidth = width;

// const viewabilityConfig = {
//   itemVisiblePercentThreshold: 80,
// };

// const initialItems = [
//   {
//     id: 0,
//     url:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//     poster:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
//   },
//   {
//     id: 1,
//     url:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//     poster:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
//   },
//   {
//     id: 2,
//     url:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
//     poster:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
//   },
//   {
//     id: 3,
//     url:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
//     poster:
//       'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
//   },
//   {
//     id: 4,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1717023960008-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1717023953229-thumb_.jpg',
//   },
//   {
//     id: 5,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1717055557374-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1717055552520-thumb_.jpg',
//   },
//   {
//     id: 6,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1717055730735-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1717055693054-thumb_.jpg',
//   },
//   {
//     id: 7,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1716988189446-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1716988113447-thumb_.jpg',
//   },
//   {
//     id: 8,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1716988737421-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1716988683464-thumb_.jpg',
//   },
//   {
//     id: 9,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1717013491748-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1717013453599-thumb_.jpg',
//   },
//   {
//     id: 10,
//     url:
//       'https://youuup.es/mobile-api/data/videoUpload/1717018895319-video_.mp4',
//     poster:
//       'https://youuup.es/mobile-api/data/uploads/1717018831493-thumb_.jpg',
//   },
//   {
//     "id": 9513,
//     "user_id": 232,
//     "video_id": "P1M7H167A1",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717107281351-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717107244820-thumb_.jpg",
//     "channel_name": "4",
//     "description": "Quedan detalles",
//     "upload_date": "2024-05-30T22:14:41.000Z",
//     "like_count": 7,
//     "share_count": 0,
//     "comment_count": 1,
//     "favourite_count": 1,
//     "view_count": 3111,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-30T22:14:41.000Z",
//     "updatedAt": "2024-05-31T12:25:15.000Z",
//     "chennelName": "Arte ",
//     "user": {
//         "id": 232,
//         "name": "fenix",
//         "following": 9,
//         "followers": 41,
//         "image": "https://youuup.es/mobile-api/data/uploads/1703849419469-profile_image_.jpg"
//     }
// },
// {
//     "id": 9508,
//     "user_id": 4908,
//     "video_id": "W117M1R7Y1",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717101324113-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717101273221-thumb_.jpg",
//     "channel_name": "41",
//     "description": "Transmitiendo",
//     "upload_date": "2024-05-30T20:35:24.000Z",
//     "like_count": 14,
//     "share_count": 0,
//     "comment_count": 0,
//     "favourite_count": 2,
//     "view_count": 2963,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-30T20:35:24.000Z",
//     "updatedAt": "2024-05-31T12:25:17.000Z",
//     "chennelName": "Naturaleza",
//     "user": {
//         "id": 4908,
//         "name": "🔹luis is isma🔹",
//         "following": 58,
//         "followers": 40,
//         "image": "https://youuup.es/mobile-api/data/uploads/1713115483973-profile_image_.jpg"
//     }
// },
// {
//     "id": 9455,
//     "user_id": 3579,
//     "video_id": "1137R1Y7N0",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717056813124-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717056809714-thumb_.jpg",
//     "channel_name": "7,8,45",
//     "description": "Olvídate de la ansiedad por la comida. Pierde peso fácilmente ",
//     "upload_date": "2024-05-30T08:13:33.000Z",
//     "like_count": 13,
//     "share_count": 0,
//     "comment_count": 0,
//     "favourite_count": 1,
//     "view_count": 5434,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-30T08:13:33.000Z",
//     "updatedAt": "2024-05-31T12:25:44.000Z",
//     "chennelName": "Belleza hombre,Belleza mujer,Nutrición y alimentación",
//     "user": {
//         "id": 3579,
//         "name": "la mar de aloe",
//         "following": 18,
//         "followers": 53,
//         "image": "https://youuup.es/mobile-api/data/uploads/1707151998175-profile_image_.jpg"
//     }
// },
// {
//     "id": 9454,
//     "user_id": 6111,
//     "video_id": "V1F70187P0",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717055730735-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717055693054-thumb_.jpg",
//     "channel_name": "58,49,44",
//     "description": "Distribuidor oficial de laboncler 🥰🥰",
//     "upload_date": "2024-05-30T07:55:30.000Z",
//     "like_count": 14,
//     "share_count": 0,
//     "comment_count": 1,
//     "favourite_count": 1,
//     "view_count": 5326,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-30T07:55:30.000Z",
//     "updatedAt": "2024-05-31T12:25:55.000Z",
//     "chennelName": "Vida cotidiana,Publicidad,Novedades",
//     "user": {
//         "id": 6111,
//         "name": "laboncler",
//         "following": 0,
//         "followers": 0,
//         "image": "https://youuup.es/mobile-api/data/uploads/1717055285242-profile_image_.jpg"
//     }
// },
// {
//     "id": 9453,
//     "user_id": 6111,
//     "video_id": "01T7U10720",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717055557374-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717055552520-thumb_.jpg",
//     "channel_name": "61,98,107",
//     "description": "Eco jin ",
//     "upload_date": "2024-05-30T07:52:37.000Z",
//     "like_count": 12,
//     "share_count": 0,
//     "comment_count": 0,
//     "favourite_count": 3,
//     "view_count": 5321,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-30T07:52:37.000Z",
//     "updatedAt": "2024-05-31T12:26:09.000Z",
//     "chennelName": "Consejos y tips,De Compras ,De Ocio ",
//     "user": {
//         "id": 6111,
//         "name": "laboncler",
//         "following": 0,
//         "followers": 0,
//         "image": "https://youuup.es/mobile-api/data/uploads/1717055285242-profile_image_.jpg"
//     }
// },
// {
//     "id": 9434,
//     "user_id": 6096,
//     "video_id": "D13781W7E0",
//     "video_type": 3,
//     "url": "https://youuup.es/mobile-api/data/videoUpload/1717023960008-video_.mp4",
//     "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717023953229-thumb_.jpg",
//     "channel_name": "109",
//     "description": "Primeros días de playa",
//     "upload_date": "2024-05-29T23:06:00.000Z",
//     "like_count": 6,
//     "share_count": 0,
//     "comment_count": 0,
//     "favourite_count": 1,
//     "view_count": 3864,
//     "status": 1,
//     "inactive_date": null,
//     "createdAt": "2024-05-29T23:06:00.000Z",
//     "updatedAt": "2024-05-31T12:25:34.000Z",
//     "chennelName": "De Relax ",
//     "user": {
//         "id": 6096,
//         "name": "minerva ",
//         "following": 7,
//         "followers": 3,
//         "image": "https://youuup.es/mobile-api/data/uploads/1717023292513-profile_image_.jpg"
//     }
// },
// {
//   "id": 9428,
//   "user_id": 6075,
//   "video_id": "41B7Z16740",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1717018895319-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717018831493-thumb_.jpg",
//   "channel_name": "67",
//   "description": "Algún día ",
//   "upload_date": "2024-05-29T21:41:35.000Z",
//   "like_count": 16,
//   "share_count": 0,
//   "comment_count": 0,
//   "favourite_count": 1,
//   "view_count": 4474,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-29T21:41:35.000Z",
//   "updatedAt": "2024-05-31T12:26:01.000Z",
//   "chennelName": "Música",
//   "user": {
//       "id": 6075,
//       "name": "fidel ",
//       "following": 0,
//       "followers": 13,
//       "image": "https://youuup.es/mobile-api/data/uploads/1716994418638-profile_image_.jpg"
//   }
// },
// {
//   "id": 9421,
//   "user_id": 6087,
//   "video_id": "W1P781B7M0",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1717013491748-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1717013453599-thumb_.jpg",
//   "channel_name": "64",
//   "description": "El Ego está en lucha contra el Ego",
//   "upload_date": "2024-05-29T20:11:31.000Z",
//   "like_count": 12,
//   "share_count": 0,
//   "comment_count": 9,
//   "favourite_count": 2,
//   "view_count": 3659,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-29T20:11:31.000Z",
//   "updatedAt": "2024-05-31T12:26:00.000Z",
//   "chennelName": "Ayuda y crecimiento personal",
//   "user": {
//       "id": 6087,
//       "name": "ishvara",
//       "following": 0,
//       "followers": 11,
//       "image": "https://youuup.es/mobile-api/data/uploads/1717011859485-profile_image_.jpg"
//   }
// },
// {
//   "id": 9386,
//   "user_id": 3579,
//   "video_id": "E137O1U6I9",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1716988737421-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1716988683464-thumb_.jpg",
//   "channel_name": "7,8,16",
//   "description": "Gama solar con Aloe Vera. Sin parabenos ",
//   "upload_date": "2024-05-29T13:18:57.000Z",
//   "like_count": 9,
//   "share_count": 0,
//   "comment_count": 0,
//   "favourite_count": 1,
//   "view_count": 2084,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-29T13:18:57.000Z",
//   "updatedAt": "2024-05-31T08:32:10.000Z",
//   "chennelName": "Belleza hombre,Belleza mujer,Cuidado personal",
//   "user": {
//       "id": 3579,
//       "name": "la mar de aloe",
//       "following": 18,
//       "followers": 53,
//       "image": "https://youuup.es/mobile-api/data/uploads/1707151998175-profile_image_.jpg"
//   }
// },
// {
//   "id": 9385,
//   "user_id": 6070,
//   "video_id": "P1X76186X9",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1716988189446-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1716988113447-thumb_.jpg",
//   "channel_name": "4",
//   "description": "Mis pendientes ",
//   "upload_date": "2024-05-29T13:09:49.000Z",
//   "like_count": 10,
//   "share_count": 0,
//   "comment_count": 0,
//   "favourite_count": 2,
//   "view_count": 2275,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-29T13:09:49.000Z",
//   "updatedAt": "2024-05-30T23:17:16.000Z",
//   "chennelName": "Arte ",
//   "user": {
//       "id": 6070,
//       "name": "color21",
//       "following": 0,
//       "followers": 8,
//       "image": "https://youuup.es/mobile-api/data/uploads/1716987974683-profile_image_.jpg"
//   }
// },
// {
//   "id": 9324,
//   "user_id": 232,
//   "video_id": "Z1V7N1B649",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1716911926754-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1716911892344-thumb_.jpg",
//   "channel_name": "4",
//   "description": "Encaje",
//   "upload_date": "2024-05-28T15:58:46.000Z",
//   "like_count": 16,
//   "share_count": 0,
//   "comment_count": 0,
//   "favourite_count": 1,
//   "view_count": 2676,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-28T15:58:46.000Z",
//   "updatedAt": "2024-05-31T07:54:59.000Z",
//   "chennelName": "Arte ",
//   "user": {
//       "id": 232,
//       "name": "fenix",
//       "following": 9,
//       "followers": 41,
//       "image": "https://youuup.es/mobile-api/data/uploads/1703849419469-profile_image_.jpg"
//   }
// },
// {
//   "id": 9294,
//   "user_id": 618,
//   "video_id": "Q1577116P8",
//   "video_type": 3,
//   "url": "https://youuup.es/mobile-api/data/videoUpload/1716885207902-video_.mp4",
//   "video_thumbnail": "https://youuup.es/mobile-api/data/uploads/1716885118955-thumb_.jpg",
//   "channel_name": "112,89,19",
//   "description": "Jump",
//   "upload_date": "2024-05-28T08:33:27.000Z",
//   "like_count": 9,
//   "share_count": 0,
//   "comment_count": 1,
//   "favourite_count": 2,
//   "view_count": 2965,
//   "status": 1,
//   "inactive_date": null,
//   "createdAt": "2024-05-28T08:33:27.000Z",
//   "updatedAt": "2024-05-30T23:17:18.000Z",
//   "chennelName": "Alto riesgo,Aventura ,Deportes",
//   "user": {
//       "id": 618,
//       "name": "parkour 4 your",
//       "following": 42,
//       "followers": 33,
//       "image": "https://youuup.es/mobile-api/data/uploads/1705272974127-profile_image_.jpg"
//   }
// }
// ];

// const Item = React.forwardRef(({ id, poster, url }, ref) => {
//   const videoRef = useRef(null);

//   // useEffect(() => {
//   //   return () => {
//   //     if (videoRef.current) {
//   //       videoRef.current.unloadAsync();
//   //     }
//   //   };
//   // }, []);

//   const play = async () => {
//     const status = await videoRef.current.getStatusAsync();
//     if (status.isPlaying) {
//       return;
//     }
//     return videoRef.current.playAsync();
//   };

//   const pause = () => {
//     if (videoRef.current) {
//       videoRef.current.stopAsync();
//     }
//   };

//   React.useImperativeHandle(ref, () => ({
//     play,
//     pause,
//   }));

//   const uri = `${url}?bust=${id}`;
//   return (
//     <View style={styles.cell}>
//       <Image
//         source={{
//           uri: poster,
//           cache: 'force-cache',
//         }}
//         style={[styles.full, styles.poster]}
//       />
//       <Video
//         ref={videoRef}
//         source={{ uri }}
//         shouldPlay={false}
//         isMuted
//         resizeMode="cover"
//         style={styles.full}
//       />
//       <View style={styles.overlay}>
//         <Text style={styles.overlayText}>Item no. {id}</Text>
//         <Text style={styles.overlayText}>Overlay text here</Text>
//       </View>
//     </View>
//   );
// });

// const App = () => {
//   const [items, setItems] = useState([]);
//   const cellRefs = useRef({});

//   useEffect(() => {
//     loadItems();
//     const timers = [
//       setTimeout(loadItems, 1000),
//       setTimeout(loadItems, 1100),
//       setTimeout(loadItems, 1200),
//       setTimeout(loadItems, 1300),
//     ];
//     return () => {
//       timers.forEach(clearTimeout);
//     };
//   }, []);

//   const onViewableItemsChanged = ({ changed }) => {
//     changed.forEach((item) => {
//       const cell = cellRefs.current[item.key];
//       if (cell) {
//         if (item.isViewable) {
//           cell.play();
//         } else {
//           cell.pause();
//         }
//       }
//     });
//   };

//   const loadItems = () => {
//     const start = items.length;
//     const newItems = initialItems.map((item, i) => ({
//       ...item,
//       id: start + i,
//     }));
//     setItems((prevItems) => [...prevItems, ...newItems]);
//   };

//   const renderItem = ({ item }) => (
//     <Item
//       ref={(ref) => {
//         cellRefs.current[item.id] = ref;
//       }}
//       {...item}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         style={{ flex: 1 }}
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         // onViewableItemsChanged={onViewableItemsChanged}
//         initialNumToRender={3}
//         maxToRenderPerBatch={3}
//         windowSize={5}
//         getItemLayout={(_data, index) => ({
//           length: cellHeight,
//           offset: cellHeight * index,
//           index,
//         })}
//         viewabilityConfig={viewabilityConfig}
//         removeClippedSubviews={true}
//         ListFooterComponent={
//           <TouchableOpacity onPress={loadItems}>
//             <Text style={{ padding: 30 }}>Load more</Text>
//           </TouchableOpacity>
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   cell: {
//     width: cellWidth - 20,
//     height: cellHeight - 20,
//     backgroundColor: '#eee',
//     borderRadius: 20,
//     overflow: 'hidden',
//     margin: 10,
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     padding: 40,
//   },
//   full: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//   },
//   poster: {
//     resizeMode: 'cover',
//   },
//   overlayText: {
//     color: '#fff',
//   },
// });

// export default App;
