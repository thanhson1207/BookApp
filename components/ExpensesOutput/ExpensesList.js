import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensesItem(itemData) {
  return <ExpenseItem {...itemData.item}/>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

const styles = StyleSheet.create({

})