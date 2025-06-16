import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="space-y-6">
          {/* Header */}
          <View className="space-y-2">
            <Text className="text-3xl font-bold text-foreground">
              Welcome to React Native Reusables
            </Text>
            <Text className="text-muted-foreground">
              Beautiful, accessible components built with NativeWind
            </Text>
          </View>

          <Separator />

          {/* Feature Cards */}
          <View className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>🎨 Beautiful Components</CardTitle>
                <CardDescription>
                  Pre-built components styled with NativeWind and inspired by shadcn/ui
                </CardDescription>
              </CardHeader>
              <CardContent>
                <View className="flex-row gap-2 flex-wrap">
                  <Badge variant="default">
                    <Text>Universal</Text>
                  </Badge>
                  <Badge variant="secondary">
                    <Text>Accessible</Text>
                  </Badge>
                  <Badge variant="outline">
                    <Text>Customizable</Text>
                  </Badge>
                </View>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🚀 Quick Start</CardTitle>
                <CardDescription>
                  Get started with just a few commands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <View className="space-y-3">
                  <Text className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">
                    npx @react-native-reusables/cli@latest add button
                  </Text>
                  <Button>
                    <Text>Try a Button</Text>
                  </Button>
                </View>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>👥 Community</CardTitle>
                <CardDescription>
                  Join our growing community of developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <View className="flex-row items-center space-x-3">
                  <View className="h-10 w-10 bg-primary rounded-full items-center justify-center">
                    <Text className="text-primary-foreground font-medium">MZ</Text>
                  </View>
                  <View>
                    <Text className="font-medium">Zach Nugent</Text>
                    <Text className="text-sm text-muted-foreground">Creator</Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </View>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>📊 Project Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <View className="flex-row justify-around">
                <View className="items-center">
                  <Text className="text-2xl font-bold text-primary">6k+</Text>
                  <Text className="text-sm text-muted-foreground">Stars</Text>
                </View>
                <View className="items-center">
                  <Text className="text-2xl font-bold text-primary">30+</Text>
                  <Text className="text-sm text-muted-foreground">Components</Text>
                </View>
                <View className="items-center">
                  <Text className="text-2xl font-bold text-primary">225+</Text>
                  <Text className="text-sm text-muted-foreground">Forks</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 