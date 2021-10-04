import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';

export default function App() {

  const height = Dimensions.get('window').height / 5;

  return (

    <ScrollView style={{
      backgroundColor: "#fff",
      flex: 1,
      marginTop: 30,
    }}
    >


      {/* //first row start */}

      <View
        style={{
          flexDirection: "row",
        }}
      >

        <Pressable
          onPress={() => alert("blue")}
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />

        <Pressable
          onPress={() => alert("tomato")}
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>

      {/* //first row end */}

      {/* //second row start */}

      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>

      {/* //second row end */}

      {/* //third row start */}

      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>

      {/* //third row end */}

      {/* //forth row start */}

      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>

      {/* //forth row end */}

      {/* //fifth row start */}

      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>
      {/* //fifth row end */}


      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />

        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>


      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>


      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>



      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "tomato",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>


      <View
        style={{
          flexDirection: "row",
        }}
      >

        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,

          }}
        />

        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            width: 200,
            height: height,
            margin: 5,
          }}
        />
      </View>

    </ScrollView>
  );
}

