import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  Camera,
  CameraType,
  CameraView,
  useCameraPermissions,
  FlashMode,
} from "expo-camera";
import * as ImagePicker from "expo-image-picker";
//import { CameraType, CameraType } from "expo-image-picker";

const Scan = ({ navigation }: { navigation: any }) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  //const [flash, setFlash] = useState(FlashMode.off);

  const cameraRef = useRef(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const ImageOverlay = ({ uri, onClose }: { uri: string; onClose: any }) => (
    <View style={styles.overlay}>
      <Image source={{ uri }} style={styles.overlayImage} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", paddingBottom: 10 }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        //@ts-ignore
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo); // The captured photo data
        setCapturedImage(photo.uri);
        setShowOverlay(true); // Show the overlay with the captured image
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    } else {
      console.log("Camera ref is not ready");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{}}>
        {/* Render the Camera view */}
        <TouchableOpacity onPress={() => setIsFullScreen(!isFullScreen)}>
          <CameraView
            ref={cameraRef}
            animateShutter={true}
            style={[styles.camera, { height: isFullScreen ? "100%" : "75%" }]}
            //@ts-ignore
            type={facing}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  style={{ margin: 5 }}
                  name="close"
                  color={"white"}
                  size={30}
                  onPress={() => navigation.goBack()}
                />
                <Icon
                  style={{ margin: 5 }}
                  name="lightning-bolt"
                  color={"red"}
                  //color={flash === FlashMode.on ? "yellow" : "white"}
                  size={30}
                  onPress={() => console.log("Flash pressed")}
                  //onPress={toggleFlash}
                />
              </View>
              <Text style={{ fontSize: 20, color: "white" }}>Shoppin lens</Text>
              <Icon
                style={{ margin: 5 }}
                name="lightning-bolt"
                color={"red"}
                //color={flash === FlashMode.on ? "yellow" : "white"}
                size={30}
                onPress={() => console.log("Flash pressed")}
                //onPress={toggleFlash}
              />
            </View>
            <View
              style={{
                backgroundColor: "transparent",
                borderColor: "white",
                borderWidth: 2,
                margin: 10,
                height: 75,
                width: 75,
                borderRadius: 50,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                position: "absolute",
                bottom: 5,
              }}
            >
              <Icon
                name="search-web"
                size={50}
                color={"black"}
                style={{
                  padding: 3,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 50,
                  backgroundColor: "white",
                }}
                onPress={takePicture}
              />
            </View>
          </CameraView>
          {showOverlay && (image || capturedImage) && (
            <ImageOverlay
              //@ts-ignore
              uri={capturedImage || image}
              onClose={() => {
                setShowOverlay(false);
                setCapturedImage(null);
                setImage(null);
              }}
            />
          )}
        </TouchableOpacity>

        <View style={styles.container}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    //flex: 1,
    width: "100%",
    borderRadius: 10,
    borderColor: "green",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

{
  /* <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View> */
}
