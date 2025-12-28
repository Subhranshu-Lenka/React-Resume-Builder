import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 32,
        fontSize: 10,
        fontFamily: "Helvetica",
        lineHeight: 1.4
    },

    /* Header */
    name: {
        fontSize: 18,
        fontWeight: "bold"
    },
    headline: {
        fontSize: 12,
        marginBottom: 6
    },
    contact: {
        fontSize: 9,
        marginBottom: 10
    },

    /* Sections */
    section: {
        marginBottom: 12
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 4,
        textTransform: "uppercase"
    },

    /* Items */
    subTitle: {
        fontWeight: "bold"
    },
    date: {
        fontSize: 9,
        marginBottom: 2
    },
    bullet: {
        marginLeft: 8
    }
});

function Template1Pdf({ data }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* HEADER */}
                <View style={styles.section}>
                    <Text style={styles.name}>{data.name || "Your Name"}</Text>
                    <Text style={styles.headline}>
                        {data.headline || "Professional Headline"}
                    </Text>

                    <Text style={styles.contact}>
                        {data.email || ""}{" "}
                        {data.profileLink ? ` | ${data.profileLink}` : ""}{" "}
                        {data.address ? ` | ${data.address}` : ""}
                    </Text>
                </View>

                {/* PROFILE SUMMARY */}
                {data.profileSummary && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Profile Summary</Text>
                        <Text>{data.profileSummary}</Text>
                    </View>
                )}

                {/* SKILLS */}
                {data.skills && data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <Text>
                            {data.skills.map(s => s.name).join(", ")}
                        </Text>
                    </View>
                )}

                {/* EXPERIENCE */}
                {data.experience && data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>

                        {data.experience.map((exp, index) => (
                            <View key={index} wrap={false}>
                                <Text style={styles.subTitle}>
                                    {exp.role} – {exp.company}
                                </Text>

                                <Text style={styles.date}>
                                    {exp.startDate} – {exp.endDate || "Present"}
                                </Text>

                                <Text>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* EDUCATION */}
                {data.education && data.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>

                        {data.education.map((edu, index) => (
                            <View key={index} wrap={false}>
                                <Text style={styles.subTitle}>{edu.degree}</Text>
                                <Text>{edu.institution}</Text>
                                <Text style={styles.date}>{edu.graduationDate}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* PROJECTS */}
                {data.project && data.project.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Projects</Text>

                        {data.project.map((proj, index) => (
                            <View key={index} wrap={false}>
                                <Text style={styles.subTitle}>{proj.name}</Text>
                                <Text>{proj.description}</Text>
                                {proj.link && <Text>{proj.link}</Text>}
                            </View>
                        ))}
                    </View>
                )}

                {/* CERTIFICATIONS */}
                {data.certification && data.certification.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Certifications</Text>

                        {data.certification.map((cert, index) => (
                            <View key={index} wrap={false}>
                                <Text style={styles.subTitle}>{cert.name}</Text>
                                <Text>{cert.issuedBy}</Text>
                                {cert.link && <Text>{cert.link}</Text>}
                            </View>
                        ))}
                    </View>
                )}

            </Page>
        </Document>
    );
}

export default Template1Pdf;
