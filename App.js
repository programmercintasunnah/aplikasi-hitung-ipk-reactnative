/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App = props => {
  const [mutu, setmutu] = useState(0);
  const [jsks, setjsks] = useState(0);
  const [ipk, setipk] = useState(0);

  const [nilaihuruf, setnilaihuruf] = useState(0);
  const [sks, setsks] = useState(0);

  const [error, seterror] = useState('');

  const hitungipk = () => {
    if (mutu !== 0 || jsks !== 0) {
      const ipk = mutu / jsks;
      seterror('');
      setipk(ipk);
    } else {
      seterror('Masukin inputan semua-nya dulu....');
    }
  };

  const hitungipk2 = () => {
    if (mutu !== 0 || jsks !== 0) {
      const jml = parseFloat(nilaihuruf) * parseInt(sks);
      const jmlmutu = parseFloat(mutu) + parseFloat(jml);
      const jmlsks = parseFloat(jsks) + parseFloat(sks);

      const ipk = jmlmutu / jmlsks;
      setipk(ipk);
      setmutu(jmlmutu);
      setjsks(jmlsks);
      seterror('');
    } else {
      seterror('Masukin inputan semua-nya dulu....');
    }
  };
  const hitungipk3 = () => {
    if (mutu !== 0 || jsks !== 0) {
      const jml = parseFloat(nilaihuruf) * parseInt(sks);
      const jmlmutu = mutu - jml;
      const jmlsks = jsks - sks;

      const ipk = jmlmutu / jmlsks;
      setipk(ipk);
      setmutu(jmlmutu);
      setjsks(jmlsks);
      seterror('');
    } else {
      seterror('Masukin inputan semua-nya dulu....');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.judul]}>HITUNG IPK</Text>
        <Text style={styles.textipk}>IPK : {ipk.toFixed(2)}</Text>
        <Text style={styles.textmutu}>Nilai Mutu : {mutu}</Text>
        <Text style={styles.textsks}>Jumlah SKS : {jsks}</Text>
        <Text style={styles.texterror}>{error}</Text>
        <View style={styles.viewinputmutu}>
          <TextInput
            placeholder="nilai mutu kumulatif..."
            placeholderTextColor="#003f5c"
            style={styles.inputmutu}
            onChangeText={input => {
              setmutu(input);
            }}
          />
        </View>
        <View style={styles.viewinputjsks}>
          <TextInput
            placeholder="jumlah sks"
            placeholderTextColor="#003f5c"
            style={styles.inputjsks}
            onChangeText={input => {
              setjsks(input);
            }}
          />
        </View>
        <View style={styles.viewbutton}>
          <TouchableOpacity onPress={hitungipk}>
            <Text style={styles.textbutton}>HITUNG IPK</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.texthapus}>Hapus/Tambah nilai : </Text>
        <View style={styles.viewhapus}>
          <TextInput
            placeholder="nilai angka (contoh: 4 adalah A)"
            placeholderTextColor="#003f5c"
            style={styles.inputnilaihuruf}
            onChangeText={input => {
              setnilaihuruf(input);
            }}
          />
        </View>
        {/* <View style={styles.pilih}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={setnilaihuruf}
          style={{height: 50, width: '100%'}}>
          <Picker.Item label="Pilih Nilai Huruf" value="" />
          <Picker.Item label="A" value="4.0" />
          <Picker.Item label="A-" value="3.7" />
          <Picker.Item label="B+" value="3.3" />
          <Picker.Item label="B" value="3.0" />
          <Picker.Item label="B-" value="2.7" />
          <Picker.Item label="C+" value="2.3" />
          <Picker.Item label="C" value="2.0" />
          <Picker.Item label="D" value="1.0" />
          <Picker.Item label="E" value="0.0" />
        </Picker>
      </View> */}
        {/*     
      <View style={styles.viewhapus}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={setsks}
          style={{height: 50, width: '100%'}}>
          <Picker.Item label="Pilih SKS (bobot)" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
      </View> */}
        <View style={styles.viewhapus}>
          <TextInput
            placeholder="bobot (sks)..."
            placeholderTextColor="#003f5c"
            style={styles.inputbobot}
            onChangeText={input => {
              setsks(input);
            }}
          />
        </View>
        <View style={styles.viewbutton1}>
          <TouchableOpacity onPress={hitungipk2}>
            <Text style={styles.textbutton}>TAMBAH MATKUL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewbutton2}>
          <TouchableOpacity onPress={hitungipk3}>
            <Text style={styles.textbutton}>HAPUS MATKUL</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textig}>@programmercintasunnah</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#003f5c',
    flex: 1,
  },
  viewinputmutu: {
    backgroundColor: '#465881',
    width: '80%',
    borderRadius: 50,
    marginBottom: 10,
  },
  viewinputjsks: {
    backgroundColor: '#465881',
    width: '80%',
    borderRadius: 50,
    marginBottom: 10,
  },
  viewhapus: {
    backgroundColor: '#465881',
    width: '80%',
    borderRadius: 50,
    marginBottom: 10,
  },
  pilih: {
    backgroundColor: '#465881',
    width: '80%',
    borderRadius: 50,
    marginBottom: 10,
  },
  textbutton: {color: 'white'},
  viewbutton: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 25,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  viewbutton1: {
    width: '80%',
    backgroundColor: 'steelblue',
    borderRadius: 25,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  viewbutton2: {
    width: '80%',
    backgroundColor: '#fb5b5b',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 5,
    height: 50,
    justifyContent: 'center',
  },
  inputmutu: {marginTop: 0},
  inputjsks: {marginTop: 0},
  judul: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  texterror: {
    color: 'red',
    marginBottom: 10,
  },
  textipk: {
    color: 'white',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  textmutu: {
    color: 'white',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  textsks: {
    color: 'white',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 10,
  },
  texthapus: {
    color: 'white',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  textig: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 150,
  },
});

export default App;
