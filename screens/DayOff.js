import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Picker
} from "react-native";
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogButton
} from "react-native-popup-dialog";
import rgba from "hex-to-rgba";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Select } from "../components";
import { Block, Button } from "galio-framework";
import colors from "../constants/Theme";
import { Calendar, Agenda } from "react-native-calendars";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons
} from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

class DayOff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      dayOff: {},
      visibleDialog: false,
      displayCalendar: true,
      isDateTimePickerVisible: false,
      dateOffWeek: {
        cn: false,
        t2: true,
        t3: true,
        t4: true,
        t5: true,
        t6: true,
        t7: false
      },
      nameNotification: ""
    };
  }

  showDateTimePicker = () => {
    console.log("cahytj ở đây");
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  onDayPress = day => {
    this.setState({
      visibleDialog: true,
      nameNotification: `Ngày này nghĩ đi chơi vs gái `
    });
  };

  displayCalendar = () => {
    this.setState({
      displayCalendar: true
    });
  };
  displayConfig = () => {
    this.setState({
      displayCalendar: false
    });
  };

  changeDateOffWeek = id => {
    console.log("iud", id);
    this.setState({
      visibleDialog: true,
      nameNotification: `Bạn có muốn chọn ngày ${id} để làm ngày nghỉ trong tuần`,
      dateOffWeek: {
        ...this.state.dateOffWeek,
        t7: !this.state.dateOffWeek.t7
      }
    });
  };

  renderCalendar = () => {
    return (
      <ScrollView style={styles.blockCalendar}>
        <Calendar
          style={styles.calendar}
          current={"2019-09-29"}
          markingType={"multi-dot"}
          onDayPress={this.onDayPress}
          markedDates={{
            "2019-09-29": {
              selected: true
            },
            "2019-09-07": {
              disabled: true
            },
            "2019-09-14": {
              disabled: true
            },
            "2019-09-21": {
              disabled: true
            },
            "2019-09-28": {
              disabled: true
            },
            "2019-09-01": {
              disabled: true
            },
            "2019-09-08": {
              disabled: true
            },

            "2019-09-15": {
              disabled: true
            },
            "2019-09-22": {
              disabled: true
            },
            "2019-09-29": {
              disabled: true
            },
            "2019-09-27": {
              dots: [
                { key: "vacation", color: "blue", selectedDotColor: "red" },
                { key: "massage", color: "red", selectedDotColor: "blue" }
              ]
            },
            "2019-09-09": {
              dots: [
                // { key: "vacation", color: "blue", selectedDotColor: "red" },
                { key: "massage", color: "red", selectedDotColor: "blue" }
              ]
            },
            "2019-09-12": {
              dots: [
                { key: "vacation", color: "blue", selectedDotColor: "red" }
                // { key: "massage", color: "red", selectedDotColor: "blue" }
              ]
            },
            "2019-09-02": {
              dots: [
                // { key: "vacation", color: "blue", selectedDotColor: "red" },
                { key: "massage", color: "red", selectedDotColor: "blue" }
              ]
            }
          }}
          hideArrows={false}
        />
        <Block flex={1} center middle style={styles.blockbtnAdd}>
          <View style={styles.badgeBtn}>
            <Button style={styles.btnAdd} onPress={this.showDateTimePicker}>
              <Ionicons name="ios-add" color="#ffffff" size={50} />
            </Button>
          </View>
        </Block>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </ScrollView>
    );
  };

  renderDialog = () => {
    const { visibleDialog, dayOff } = this.state;
    return (
      <Dialog
        visible={visibleDialog}
        // onTouchOutside={() => {
        //   this.setState({ visible: false });
        // }}
        rounded
        width={0.9}
        actionsBordered
        dialogAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        dialogTitle={
          <DialogTitle
            title="Thông báo"
            style={{
              backgroundColor: "#ffffff",
              alignItems: "center"
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              onPress={() =>
                this.setState({
                  visibleDialog: false
                })
              }
            />
            <DialogButton
              text="OK"
              onPress={() =>
                this.setState({
                  visibleDialog: false
                })
              }
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <Text>{this.state.nameNotification} </Text>
        </DialogContent>
      </Dialog>
    );
  };

  renderBlockIcon = () => {
    const { dateOffWeek } = this.state;
    return (
      <Block style={styles.blockIcon}>
        <View
          style={dateOffWeek.cn ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.cn ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("cn")}
          >
            <Text style={{ color: "#ffffff" }}>CN</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t2 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t2 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t2")}
          >
            <Text style={{ color: "#ffffff" }}>T2</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t3 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t3 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t3")}
          >
            <Text style={{ color: "#ffffff" }}>T3</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t4 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t4 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t4")}
          >
            <Text style={{ color: "#ffffff" }}>T4</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t5 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t5 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t5")}
          >
            <Text style={{ color: "#ffffff" }}>T5</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t6 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t6 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t6")}
          >
            <Text style={{ color: "#ffffff" }}>T6</Text>
          </Button>
        </View>
        <View
          style={dateOffWeek.t7 ? styles.badgeDateActive : styles.badgeDate}
        >
          <Button
            style={dateOffWeek.t7 ? styles.btnDateActive : styles.btnDate}
            onPress={() => this.changeDateOffWeek("t7")}
          >
            <Text style={{ color: "#ffffff" }}>T7</Text>
          </Button>
        </View>
      </Block>
    );
  };

  renderConfigCalendar = () => {
    return (
      <Block>
        <Block card>
          <Text>Thứ 2</Text>
        </Block>
        <Block flex left>
          <Select defaultIndex={1} options={["01", "02", "03", "04", "05"]} />
        </Block>
      </Block>
    );
  };

  render() {
    const { displayCalendar } = this.state;
    return (
      <Block style={styles.DayOff}>
        {this.renderBlockIcon()}
        <Block style={styles.content}>
          {displayCalendar
            ? this.renderCalendar()
            : this.renderConfigCalendar()}
        </Block>
        {this.renderDialog()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  DayOff: {
    width: width
  },
  // content: {
  //   marginTop: 70
  // },
  blockCalendar: {},
  calendar: {
    marginHorizontal: 10
  },

  blockIcon: {
    flexWrap: "wrap",
    marginVertical: 20,
    marginHorizontal: 10,
    color: "#ffffff",
    height: 80
  },
  btnDateActive: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.COLORS.PRIMARY
  },
  btnDate: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: colors.COLORS.GRAY
  },
  badge1Color: {
    backgroundColor: rgba(colors.COLORS.PRIMARY, "0.2"),
    height: 65,
    width: 65,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badge1: {
    backgroundColor: "transparent",
    height: 65,
    width: 65,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badge2Color: {
    backgroundColor: rgba(colors.COLORS.PRIMARY, "0.2"),
    height: 55,
    width: 55,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badge2: {
    backgroundColor: "transparent",
    height: 55,
    width: 55,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badgeDateActive: {
    backgroundColor: rgba(colors.COLORS.PRIMARY, "0.2"),
    height: 55,
    width: 55,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badgeDate: {
    backgroundColor: rgba(colors.COLORS.GRAY, "0.2"),
    height: 55,
    width: 55,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  blockbtnAdd: {
    marginTop: 100
  },
  btnAdd: {
    height: 70,
    width: 70,
    borderRadius: 999
  },
  badgeBtn: {
    backgroundColor: rgba(colors.COLORS.PRIMARY, "0.2"),
    height: 100,
    width: 100,
    borderRadius: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DayOff;
