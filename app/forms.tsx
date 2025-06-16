import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';

export default function FormsScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      Alert.alert('Error', 'Please fill in required fields');
      return;
    }

    Alert.alert(
      'Form Submitted',
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    Alert.alert('Success', 'Form has been reset');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="space-y-6">
          {/* Header */}
          <View className="space-y-2">
            <Text className="text-2xl font-bold text-foreground">
              Form Examples
            </Text>
            <Text className="text-muted-foreground">
              Demonstrating form components and validation
            </Text>
          </View>

          <Separator />

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Fill out this form to get in touch with us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-4">
                {/* Name Field */}
                <View className="space-y-2">
                  <Label nativeID="name">Name *</Label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
                    aria-labelledby="name"
                  />
                </View>

                {/* Email Field */}
                <View className="space-y-2">
                  <Label nativeID="email">Email *</Label>
                  <Input
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    aria-labelledby="email"
                  />
                </View>

                {/* Phone Field */}
                <View className="space-y-2">
                  <Label nativeID="phone">Phone Number</Label>
                  <Input
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChangeText={(value) => handleInputChange('phone', value)}
                    keyboardType="phone-pad"
                    aria-labelledby="phone"
                  />
                </View>

                {/* Message Field */}
                <View className="space-y-2">
                  <Label nativeID="message">Message</Label>
                  <Input
                    placeholder="Enter your message"
                    value={formData.message}
                    onChangeText={(value) => handleInputChange('message', value)}
                    multiline
                    numberOfLines={4}
                    style={{ minHeight: 100 }}
                    aria-labelledby="message"
                  />
                </View>

                {/* Form Actions */}
                <View className="flex-row space-x-3 pt-4">
                  <Button onPress={handleSubmit} className="flex-1">
                    <Text>Submit</Text>
                  </Button>
                  <Button variant="outline" onPress={handleReset} className="flex-1">
                    <Text>Reset</Text>
                  </Button>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Login Form */}
          <Card>
            <CardHeader>
              <CardTitle>Login Form</CardTitle>
              <CardDescription>
                Example login form with validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-4">
                <View className="space-y-2">
                  <Label nativeID="login-email">Email</Label>
                  <Input
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    aria-labelledby="login-email"
                  />
                </View>

                <View className="space-y-2">
                  <Label nativeID="password">Password</Label>
                  <Input
                    placeholder="Enter your password"
                    secureTextEntry
                    aria-labelledby="password"
                  />
                </View>

                <View className="space-y-3 pt-4">
                  <Button onPress={() => Alert.alert('Login', 'Login functionality would go here')}>
                    <Text>Sign In</Text>
                  </Button>

                  <Button
                    variant="ghost"
                    onPress={() => Alert.alert('Info', 'Forgot password functionality would go here')}
                  >
                    <Text>Forgot Password?</Text>
                  </Button>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Input Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Input Variations</CardTitle>
              <CardDescription>
                Different input types and configurations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-4">
                <View className="space-y-2">
                  <Label nativeID="text-input">Text Input</Label>
                  <Input
                    placeholder="Regular text input"
                    aria-labelledby="text-input"
                  />
                </View>

                <View className="space-y-2">
                  <Label nativeID="number-input">Number Input</Label>
                  <Input
                    placeholder="Enter a number"
                    keyboardType="numeric"
                    aria-labelledby="number-input"
                  />
                </View>

                <View className="space-y-2">
                  <Label nativeID="url-input">URL Input</Label>
                  <Input
                    placeholder="https://example.com"
                    keyboardType="url"
                    autoCapitalize="none"
                    aria-labelledby="url-input"
                  />
                </View>

                <View className="space-y-2">
                  <Label nativeID="disabled-input">Disabled Input</Label>
                  <Input
                    placeholder="This input is disabled"
                    editable={false}
                    className="opacity-50"
                    aria-labelledby="disabled-input"
                  />
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Form State Display */}
          <Card>
            <CardHeader>
              <CardTitle>Current Form Data</CardTitle>
              <CardDescription>
                Real-time display of form values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-2">
                <Text className="text-sm">
                  <Text className="font-medium">Name:</Text> {formData.name || 'Not entered'}
                </Text>
                <Text className="text-sm">
                  <Text className="font-medium">Email:</Text> {formData.email || 'Not entered'}
                </Text>
                <Text className="text-sm">
                  <Text className="font-medium">Phone:</Text> {formData.phone || 'Not entered'}
                </Text>
                <Text className="text-sm">
                  <Text className="font-medium">Message:</Text> {formData.message || 'Not entered'}
                </Text>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 