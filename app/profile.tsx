import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';

export default function ProfileScreen() {
  const [isEditMode, setIsEditMode] = useState(false);

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Senior Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    joinDate: 'January 2022',
    bio: 'Passionate full-stack developer with 8+ years of experience building scalable web and mobile applications.',
  };

  const stats = [
    { label: 'Projects', value: '24', color: 'default' as const },
    { label: 'Team Size', value: '8', color: 'secondary' as const },
    { label: 'Experience', value: '8yr', color: 'outline' as const },
  ];

  const achievements = [
    'React Native Expert',
    'Team Lead',
    'Innovation Award 2023',
    'Mentor',
  ];

  const skills = [
    'React Native',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Docker',
    'React',
  ];

  const recentActivity = [
    { action: 'Completed Project Alpha', time: '2 hours ago' },
    { action: 'Updated profile information', time: '1 day ago' },
    { action: 'Joined Engineering team meeting', time: '3 days ago' },
    { action: 'Submitted code review', time: '1 week ago' },
  ];

  const handleEditProfile = () => {
    setIsEditMode(!isEditMode);
    Alert.alert(
      isEditMode ? 'Profile Saved' : 'Edit Mode',
      isEditMode ? 'Your profile changes have been saved!' : 'You can now edit your profile information.'
    );
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change functionality would be implemented here.');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => Alert.alert('Logged Out', 'You have been logged out successfully.') },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <View className="items-center space-y-4">
                <View className="h-20 w-20 bg-primary rounded-full items-center justify-center">
                  <Text className="text-primary-foreground text-2xl font-bold">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </Text>
                </View>
                <View className="items-center space-y-1">
                  <Text className="text-2xl font-bold text-foreground">
                    {userProfile.name}
                  </Text>
                  <Text className="text-muted-foreground">
                    {userProfile.role}
                  </Text>
                  <Badge variant="secondary">
                    <Text>{userProfile.department}</Text>
                  </Badge>
                </View>
                <Button onPress={handleEditProfile} variant={isEditMode ? "default" : "outline"}>
                  <Text>{isEditMode ? 'Save Profile' : 'Edit Profile'}</Text>
                </Button>
              </View>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <View className="flex-row justify-around">
                {stats.map((stat, index) => (
                  <View key={index} className="items-center space-y-2">
                    <Text className="text-2xl font-bold text-primary">{stat.value}</Text>
                    <Badge variant={stat.color}>
                      <Text>{stat.label}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                {isEditMode ? 'Edit your profile details' : 'Your personal and professional information'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-4">
                <View className="flex-row justify-between items-center">
                  <Text className="font-medium text-muted-foreground">Email</Text>
                  <Text className="text-foreground">{userProfile.email}</Text>
                </View>
                <Separator />
                <View className="flex-row justify-between items-center">
                  <Text className="font-medium text-muted-foreground">Location</Text>
                  <Text className="text-foreground">{userProfile.location}</Text>
                </View>
                <Separator />
                <View className="flex-row justify-between items-center">
                  <Text className="font-medium text-muted-foreground">Join Date</Text>
                  <Text className="text-foreground">{userProfile.joinDate}</Text>
                </View>
                <Separator />
                <View className="space-y-2">
                  <Text className="font-medium text-muted-foreground">Bio</Text>
                  <Text className="text-foreground text-sm leading-relaxed">
                    {userProfile.bio}
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
              <CardDescription>
                Technologies you work with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="flex-row flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    <Text>{skill}</Text>
                  </Badge>
                ))}
              </View>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Recognition and milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-3">
                {achievements.map((achievement, index) => (
                  <View key={index} className="flex-row items-center space-x-3">
                    <View className="h-2 w-2 bg-primary rounded-full" />
                    <Text className="text-foreground">{achievement}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest actions and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <View key={index} className="space-y-1">
                    <Text className="text-foreground">{activity.action}</Text>
                    <Text className="text-sm text-muted-foreground">{activity.time}</Text>
                    {index < recentActivity.length - 1 && <Separator className="mt-3" />}
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-3">
                <Button variant="outline" onPress={handleChangePassword}>
                  <Text>Change Password</Text>
                </Button>
                <Button variant="outline" onPress={() => Alert.alert('Settings', 'Settings panel would open here')}>
                  <Text>Notification Settings</Text>
                </Button>
                <Button variant="outline" onPress={() => Alert.alert('Privacy', 'Privacy settings would open here')}>
                  <Text>Privacy Settings</Text>
                </Button>
                <Button variant="destructive" onPress={handleLogout}>
                  <Text>Logout</Text>
                </Button>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 