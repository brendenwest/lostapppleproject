import React from 'react';
import {Text, ScrollView, Image} from 'react-native';
import Header from '../shared/Header';
import styles from '../StyleSheet/About';

function About() {
  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.aboutImg}
        source={require('../Images/david-denscoter.jpeg')}
      />
      <Text style={styles.centerText}>
        Organized in 1972, the Whitman County Historical Society strives to
        preserve the history and cultural heritage of our region. To do this the
        society has developed programs designed to meet a variety of interests
        in the area. The society owns two museums, three historic buildings,
        publishes a newsletter and a historical journal, and maintains a growing
        archival collection. In addition, the Historical Society has a number of
        on going projects. David Benscoter, a retired FBI, and IRS Criminal
        Division agent, heads the Lost Apple Project that is one of the ongoing
        projects. Apple Detectives as part of Lost Project search for rare
        varieties of Apples.
      </Text>

      <Image
        style={styles.aboutImg1}
        source={require('../Images/northwest.png')}
      />
      <Text style={styles.centerText}>
        In 2017 a total of 200 apple varieties were sent to experts in Oregon
        for testing, resulting in five new re-discovered apples and many
        considered heirloom types. Since 2016 four lost (thought to be extinct)
        apple varieties from the Palouse have been located and identified: Nero,
        Arkansas Beauty, Dickinson, and McAfee. The Fall Jeneting, located in
        Colfax, became the second known re-discovery of this variety.
        Additionally four other lost apples from locations in Washington and
        Idaho have been re-discovered through the efforts of Lost Apple Project
        (LAP).
      </Text>
      <Image
        style={styles.aboutImg1}
        source={require('../Images/apple-note.jpeg')}
      />
      <Text style={styles.centerText}>
        In 2017 the LAP sold nearly 100 apple trees, including 80 once lost
        varieties, to the people of eastern Washington. This year there will be
        a limited number of once lost trees available for sale. If you would
        like to purchase a tree email Dave Benscoter. Also, if you purchased a
        tree in 2017 and it did not survive, please contact Dave and he will
        make sure you get a replacement tree. The cost is $25.00 to general
        public and $20 to WCHS members. These trees are on M111 rootstock which
        can grow to twenty feet. All proceeds help to fund further apple
        research and the WCHS.
      </Text>
      <Text style={styles.contact}>
        <Text style={styles.textHeading}> Contact Info{'\n'}</Text>
        {'\b'}
        <Text style={{fontWeight: 'bold'}}>Address: </Text> {'\n'}
        PO Box 67 Colfax, WA 99111 {'\b'} {'\n'}
        <Text style={{fontWeight: 'bold'}}>Email to:</Text> {'\n'}
        {'\b'}
        wchsdirector1@gmail.com {'\n'}
        {'\b'}
        <Text style={{fontWeight: 'bold'}}>Email to Dave Benscoter:</Text>
        dbens23@gmail.com
      </Text>
    </ScrollView>
  );
}

export default About;
