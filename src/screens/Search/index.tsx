import { StackNavigationProp } from '@react-navigation/stack';
import { SearchInput } from 'components/app/SearchInput';
import { FlexCol, Gutter, Typography } from 'components/atoms';
import { RootStackParamList } from 'navigation/Root';
import React, { useCallback, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { launchJson } from 'data/dummy';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { LaunchSite, Rocket, TSpaceX } from 'typings/spaceX';
// import { getEachItem } from 'utils/algo';

type Props = {
	navigation: StackNavigationProp<RootStackParamList, 'Search'>;
};
const Wrapper = styled.View`
	flex: 1;
	position: absolute;
	top: 45px;
	left: 50px;
	right: 50px;
`;
const CText = styled.TouchableOpacity`
	margin-top: 2px;
`;
const NotHighlighted = styled(Typography)`
	font-size: 16;
	font-weight: bold;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.grey2};
	opacity: 0.7;
`;
const Highlighted = styled(Typography)`
	font-weight: bold;
	font-size: 16px;
	color: black;
	opacity: 1;
	letter-spacing: 1.5px;
	text-transform: uppercase;
`;
const Placeholder = styled(Typography)`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 15px;
	padding-bottom: 12px;
	padding-top: 12px;
	color: ${(props) => props.theme.colors.grey2};
`;
type TData = {
	placeholder: string;
	dataSource: string[];
};
const Search: React.ComponentType<Props> = () => {
	const [searchText, setSearchText] = useState('');
	const [height] = React.useState<number>(400);
	const [dropdown, setDropdown] = React.useState<boolean>(false);
	const animatedvalue = useRef(new Animated.Value(70)).current;
	const [data, setData] = useState<any>([]);

	const launches = useSelector(
		(state: RootState) => state.main.spaceXDataSource,
	);
  
	const filterFields = ['rocket_name', 'mission_name', 'site_name'];
	

	const extractData = useCallback(
		(rockets: TSpaceX[], searchTerm: string) => {
			const launchJson: TData[] = filterFields.map((field) => ({
				placeholder: field,
				dataSource: [],
			}));

			rockets.forEach(
				(rocket: {
					mission_name: string;
					rocket: Rocket;
					launch_site: LaunchSite;
				}) => {
					let {
						mission_name,
						rocket: { rocket_name },
						launch_site: { site_name },
					} = rocket;

					mission_name = mission_name.toLowerCase();
					rocket_name = rocket_name.toLowerCase();
					site_name = site_name.toLowerCase();
					searchTerm = searchTerm.toLowerCase();

					if (mission_name.includes(searchTerm)) {
						const index = launchJson.findIndex(
							(j) => j.placeholder === 'mission_name',
						);
						if (launchJson[index].dataSource.length < 3)
							launchJson[index].dataSource.push(mission_name);
					}

					if (rocket_name.includes(searchTerm)) {
						const index = launchJson.findIndex(
							(j) => j.placeholder === 'rocket_name',
						);
						if (launchJson[index].dataSource.length < 3)
							launchJson[index].dataSource.push(rocket_name);
					}

					if (site_name.includes(searchTerm)) {
						const index = launchJson.findIndex(
							(j) => j.placeholder === 'site_name',
						);
						if (launchJson[index].dataSource.length < 3)
							launchJson[index].dataSource.push(site_name);
					}
				},
			);

			return launchJson.filter((json) => json.dataSource.length > 0);
		},
		[searchText,data],
	);

	const slidedown = useCallback(() => {
		setDropdown(true);
		Animated.timing(animatedvalue, {
			toValue: height,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}, [data]);

	const slideup = useCallback(() => {
		Animated.timing(animatedvalue, {
			toValue: 70,
			duration: 500,
			useNativeDriver: false,
		}).start(() => setDropdown(false));
	}, [data]);

	const searchLaunches = (text: any) => {
		if (text === '') setData([]);
		else {
			const x = extractData(launches, text);
			setData(x);
			slidedown();
		}
		setSearchText(text);
	};


	return (
		<Wrapper>
			<Animated.View
				style={{
					maxHeight: animatedvalue,
					backgroundColor: 'white',
					padding: 15,
					borderRadius: 24,
				}}
			>
				<SearchInput
					value={searchText}
					onChangeText={(text) => {
						searchLaunches(text);
					}}
				/>
				{data.length > 0 && dropdown ? (
					<ScrollView style={styles.dropdown}>
						{data.map((item: any, i: any) => {
							return (
								<FlexCol>
									<Placeholder>
										{item.placeholder}
									</Placeholder>
									{item.dataSource.map((x: any, i: any) => {
										let string = x.substr(
											0,

											x
												.toLowerCase()
												.indexOf(
													searchText.toLowerCase(),
												),
										);
										let endString = x.substr(
											x
												.toLowerCase()
												.indexOf(
													searchText.toLowerCase(),
												) + searchText.length,
										);
										let highlightedText = x.substr(
											x
												.toLowerCase()
												.indexOf(
													searchText.toLowerCase(),
												),
											searchText.length,
										);
										return (
											<CText
												key={i}
												onPress={() => {
													setSearchText(x), slideup();
												}}
											>
												<Typography>
													<NotHighlighted>
														{string}
													</NotHighlighted>
													<Highlighted>
														{highlightedText}
													</Highlighted>
													<NotHighlighted>
														{endString}
													</NotHighlighted>
												</Typography>
											</CText>
										);
									})}
									<Gutter />
								</FlexCol>
							);
						})}
					</ScrollView>
				) : null}
			</Animated.View>
		</Wrapper>
	);
};
const styles = StyleSheet.create({
	dropdown: {
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 10,
		marginTop: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 5,
	},
	option: { paddingHorizontal: 20, paddingVertical: 8 },
});

export { Search };
