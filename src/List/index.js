import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props) {

  function carregueIcone(likeada){{
    return likeada ? require('../img/likeada.png') :
    require('../img/like.png')
  }}

  function mostrarLikes(like){
    if(like ===0){
      return;
    }

    return(
<Text style={styles.likes}>{like} {like > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }


  return (
    <View>
      <View style={styles.viewPerfil}> 
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.imagePerfil} 
        />
        <Text style={styles.nomeUsers}>{props.data.nome}</Text>
      </View>


      <Image
      resizeMode='cover'
        source={{ uri: props.data.imgPublicacao }}
        style={styles.imagePublicacao} 
      />

      <View style={styles.btnarea}>
    <TouchableOpacity>
      <Image
      source={carregueIcone(props.data.likeada)}
      style={styles.iconeLike}
      />
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnsend}>
      <Image
      source={require('../img/comment.png')}
      style={styles.iconeLike}
      />
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnsend}>
      <Image
      source={require('../img/send.png')}
      style={styles.iconeLike}
      />
    </TouchableOpacity>
      </View>

    {mostrarLikes(props.data.likers)}

    <Text style={styles.nomeRodape}>
      {props.data.nome}
    </Text>

    <Text style={styles.descRodape}>
      {props.data.descricao}
    </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imagePerfil: { 
    width: 50,
    height: 50,
    borderRadius: 25, 
  },
  nomeUsers: {
    paddingLeft: 5,
    fontSize: 20,
    color: '#000'
  },
  imagePublicacao: {   
    height: 300  
  },

  btnarea:{
    flexDirection: 'row',
    padding: 5,
  },

  iconeLike:{
    width: 25,
    height: 25
  },

  btnsend:{
    paddingLeft: 5
  },

  likes:{
    fontWeight: 'bold',
    marginLeft: 5
  },

  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },

  descRodape:{
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }
});
