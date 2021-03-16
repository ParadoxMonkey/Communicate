import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../../components/forms';
import * as Yup from 'yup';

import colors from '../../config/colors'

 const validationSchema = Yup.object().shape({
    currentPosting: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long')
    .required('Required'),

    dateOfJoiningCurrentPosting: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .label('Date of Joining Current Post')
    .required('Required'),

    dateOfBirth: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .label('Date of Birth')
    .required('Required'),


    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  password: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  phoneNumber: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),



  preferredLanguage: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
}) 

function SignupScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}> Register </Text>
        <ScrollView>
            <AppForm
                initialValues={{currentPosting: "",
                                dateOfBirth: "" ,
                                dateOfJoiningCurrentPosting: "",                                
                                firstName: "",
                                lastName: "",
                                preferredLanguage: "",
                                password: "",
                                phoneNumber: "",
                            }}

                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <View style={styles.fieldContainer}>

                <AppFormField 
                    placeholder='First Name' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="words"
                    keyboardType="email-address"
                    name="firstName"               
                    />

                <AppFormField 
                    placeholder='Last Name' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="words"
                    keyboardType="email-address"
                    name="lastName"              
                    />

                    <AppFormField 
                    placeholder='Date of Birth' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="dateOfBirth"              
                    />

                    <AppFormField 
                    placeholder='Current Posting' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="sentences"
                    keyboardType="email-address"
                    name="currentPosting"              
                    />

                <AppFormField 
                    placeholder='Date of Joining Current Post' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="sentences"
                    keyboardType="email-address"
                    name="dateOfJoiningCurrentPosting"              
                    />
                    
                <AppFormField 
                    placeholder='Preferred Language' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="words"
                    keyboardType="email-address"
                    name="preferredLanguage"              
                    />           

                <AppFormField 
                    placeholder='Phone Number' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    name="phoneNumber"              
                    />    
                              
                <AppFormField 
                    placeholder='Password' 
                    color={colors.black} 
                    placeholderColor={colors.medium} 
                    autoCapitalize="none"
                    keyboardType="default"
                    name="password"  
                    secureTextEntry            
                    />              

                    <View style={styles.submitButtonContainer}>
                    <SubmitButton title="Sign Up" />
                    </View>
                </View>          

            </AppForm>
            
            </ScrollView>
                

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7D6D0'
        
    },

    fieldContainer: {
        flexDirection: 'column',        
        height: '50%',
        margin: 10,
        marginLeft: 15,

    },
    
    headingText: {
        fontSize: 42,
        alignSelf: 'center',
        marginTop: 20,
        color: colors.maroon,
        paddingBottom: 5,
    },


    submitButtonContainer: {
        flex: 0,
        margin: 10,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        
        
        
             
        
    },



})
export default SignupScreen;