import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';

export default function ComponentsScreen() {
  const [selectedTab, setSelectedTab] = useState('buttons');

  const showAlert = (message: string) => {
    Alert.alert('Component Demo', message);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="space-y-6">
          {/* Header */}
          <View className="space-y-2">
            <Text className="text-2xl font-bold text-foreground">
              Component Showcase
            </Text>
            <Text className="text-muted-foreground">
              Explore the available React Native Reusables components
            </Text>
          </View>

          <Separator />

          {/* Tabs Demo */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="buttons">
                <Text>Buttons</Text>
              </TabsTrigger>
              <TabsTrigger value="badges">
                <Text>Badges</Text>
              </TabsTrigger>
              <TabsTrigger value="cards">
                <Text>Cards</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>
                    Different button styles and states
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="space-y-3">
                    <View className="flex-row gap-2 flex-wrap">
                      <Button onPress={() => showAlert('Default button pressed!')}>
                        <Text>Default</Text>
                      </Button>
                      <Button variant="secondary" onPress={() => showAlert('Secondary button pressed!')}>
                        <Text>Secondary</Text>
                      </Button>
                      <Button variant="outline" onPress={() => showAlert('Outline button pressed!')}>
                        <Text>Outline</Text>
                      </Button>
                    </View>
                    <View className="flex-row gap-2 flex-wrap">
                      <Button variant="destructive" onPress={() => showAlert('Destructive button pressed!')}>
                        <Text>Destructive</Text>
                      </Button>
                      <Button variant="ghost" onPress={() => showAlert('Ghost button pressed!')}>
                        <Text>Ghost</Text>
                      </Button>
                      <Button variant="link" onPress={() => showAlert('Link button pressed!')}>
                        <Text>Link</Text>
                      </Button>
                    </View>
                  </View>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>
                    Different button sizes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="space-y-3">
                    <Button size="sm" onPress={() => showAlert('Small button!')}>
                      <Text>Small</Text>
                    </Button>
                    <Button size="default" onPress={() => showAlert('Default size!')}>
                      <Text>Default</Text>
                    </Button>
                    <Button size="lg" onPress={() => showAlert('Large button!')}>
                      <Text>Large</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="badges" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                  <CardDescription>
                    Different badge styles for status indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="flex-row gap-2 flex-wrap">
                    <Badge variant="default">
                      <Text>Default</Text>
                    </Badge>
                    <Badge variant="secondary">
                      <Text>Secondary</Text>
                    </Badge>
                    <Badge variant="destructive">
                      <Text>Destructive</Text>
                    </Badge>
                    <Badge variant="outline">
                      <Text>Outline</Text>
                    </Badge>
                  </View>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Badges</CardTitle>
                  <CardDescription>
                    Common use cases for badges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="space-y-3">
                    <View className="flex-row items-center justify-between">
                      <Text>Order Status:</Text>
                      <Badge variant="default">
                        <Text>Processing</Text>
                      </Badge>
                    </View>
                    <View className="flex-row items-center justify-between">
                      <Text>Payment:</Text>
                      <Badge variant="destructive">
                        <Text>Failed</Text>
                      </Badge>
                    </View>
                    <View className="flex-row items-center justify-between">
                      <Text>Shipping:</Text>
                      <Badge variant="secondary">
                        <Text>Delivered</Text>
                      </Badge>
                    </View>
                    <View className="flex-row items-center justify-between">
                      <Text>Priority:</Text>
                      <Badge variant="outline">
                        <Text>High</Text>
                      </Badge>
                    </View>
                  </View>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>
                    A basic card with header and content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>This is the card content. Cards are great for organizing related information.</Text>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>
                    Card with action button
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="space-y-3">
                    <Text>Cards can contain any content including buttons, images, and other components.</Text>
                    <Button variant="outline" onPress={() => showAlert('Card action!')}>
                      <Text>Learn More</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stats Card</CardTitle>
                  <CardDescription>
                    Perfect for displaying metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="flex-row justify-between">
                    <View className="items-center">
                      <Text className="text-2xl font-bold text-primary">42</Text>
                      <Text className="text-sm text-muted-foreground">Active</Text>
                    </View>
                    <View className="items-center">
                      <Text className="text-2xl font-bold text-primary">128</Text>
                      <Text className="text-sm text-muted-foreground">Total</Text>
                    </View>
                    <View className="items-center">
                      <Text className="text-2xl font-bold text-primary">86%</Text>
                      <Text className="text-sm text-muted-foreground">Success</Text>
                    </View>
                  </View>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 