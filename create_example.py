import sublime
import sublime_plugin
import re

"""
function BasicForm(props) {
	const [lazyLen, setLazyLen] = useState(0)
	const [immediateLen, setImmediateLen] = useState(0)

	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<div>
				{/*
					Inputs can be anywhere as long as
					they are wrapped by a HookForm component
				*/}
				<InputTable>
					<TextInput
						fkey="lazy"
						label="Lazy check"
						validate={value =>
						{
							setLazyLen(value.length)

							if (/\d/.test(value))
								return { pass: false, message: "No numbers allowed" }

							return { pass: true }
						}}
						hint={"Length: " + lazyLen}
						placeholder="Do not write numbers here!"
						/>
					<TextInput
						fkey="immediate"
						label="Immediate check"
						immediate={true}
						validate={value =>
						{
							setImmediateLen(value.length)

							if (/\d/.test(value))
								return { pass: false, message: "No numbers allowed" }

							return { pass: true }
						}}
						hint={"Length: " + immediateLen}
						placeholder="Do not write numbers here!"
						/>	
				</InputTable>
			</div>
		</HookForm>
	)
}

const code = "function BasicForm(props) {
	const [lazyLen, setLazyLen] = useState(0)
	const [immediateLen, setImmediateLen] = useState(0)

	return (
		<HookForm
			{...props}
			buttons={null}
			>
			<div>
				{/*
					Inputs can be anywhere as long as
					they are wrapped by a HookForm component
				*/}
				<InputTable>
					<TextInput
						fkey=\"lazy\"
						label=\"Lazy check\"
						validate={value =>
						{
							setLazyLen(value.length)

							if (/\\d/.test(value))
								return { pass: false, message: \"No numbers allowed\" }

							return { pass: true }
						}}
						hint={\"Length: \" + lazyLen}
						placeholder=\"Do not write numbers here!\"
						/>
					<TextInput
						fkey=\"immediate\"
						label=\"Immediate check\"
						immediate={true}
						validate={value =>
						{
							setImmediateLen(value.length)

							if (/\\d/.test(value))
								return { pass: false, message: \"No numbers allowed\" }

							return { pass: true }
						}}
						hint={\"Length: \" + immediateLen}
						placeholder=\"Do not write numbers here!\"
						/>	
				</InputTable>
			</div>
		</HookForm>
	)
}"

"""

class CreateExampleCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		# Get all text content
		content = self.view.substr(sublime.Region(0, self.view.size()))

		r = re.search(r"function [A-Za-z]\w*\(.*?\) {", content, re.MULTILINE)

		if not r:
			print("No match!")
			return

		start = r.span()[0]
		end = findClosingBracket(content, r.span()[1]) + 1

		if not end:
			print("No closing bracket!")
			return

		# print("MATCH!", start, end)
		# print(content[start:end])

		codeStr = content[start:end]
		codeStr = re.sub("\\\\", "\\\\\\\\", codeStr)
		codeStr = re.sub("\"", "\\\"", codeStr)
		codeStr = re.sub("\n", "\\\\n\\\n", codeStr)
		codeStr = "\"" + codeStr + "\""

		self.view.insert(edit, end, "\n\nconst code = " + codeStr)

		return "asd"

def findClosingBracket(string, start):
	openBrackets = 1

	for i in range(start, len(string)):
		if string[i] is "{":
			openBrackets += 1
		elif string[i] is "}":
			openBrackets -= 1
			if openBrackets is 0:
				return i

	return -1
