import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FONTS from '../config/fonts';

const DatePickerInput = ({ label, value, onChange }:any) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || new Date());

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event:any, date:any) => {
    if (date !== undefined) {
      setShowDatePicker(false);
      setSelectedDate(date);
      onChange(date);
    } else {
      setShowDatePicker(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={showDatepicker}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{selectedDate.toLocaleDateString()}</Text>
        </View>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: FONTS.Bold,
  },
  inputContainer: {
    borderColor: '#f1f1f1',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputText: {
    fontSize: 16,
  },
});

export default DatePickerInput;
